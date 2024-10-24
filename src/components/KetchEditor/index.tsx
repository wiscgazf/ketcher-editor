import {FC, useEffect, useMemo, useState} from 'react'
// import Rdkit from '@rdkit/rdkit'
import {Button, Modal, message} from 'antd'
import {StandaloneStructServiceProvider} from 'ketcher-standalone'
import {Editor, ButtonsConfig} from 'ketcher-react'
import type {Ketcher, MolfileFormat} from 'ketcher-core'
import {requestFullscreen, isFullScreen, exitFullscreen} from '../../utils'
import Ketcher3D from '../Ketcher3D'
import {rightBar, editLeftBar, IBarItem} from '../../config/customBar'
import 'miew/dist/Miew.min.css'
import 'ketcher-react/dist/index.css'
import styles from './index.module.scss'

interface IProps {
    isSimpleEditor: boolean
    struct: string
}

const models = ['球棍模型', '棒状模型', '空间填充模型']

const structServiceProvider = new StandaloneStructServiceProvider()
const KetcherMain: FC<IProps> = ({struct = '', isSimpleEditor = true}) => {
    // MOL 结构的字符串
    const [molStr, setMolStr] = useState<string>('')
    // 预览弹窗
    const [previewModal, setPreviewModal] = useState<boolean>(false)

    const [messageApi, contextHolder] = message.useMessage()

    // 放大倍数
    const [zoom, setZoom] = useState<number>(1)

    const [leftBarFlg, setLeftBarFlag] = useState({
        arom: '',
        c: false,
        h: false,
        allH: false
    })

    useEffect(() => {
        if (struct && window.ketcher) {
            window.ketcher.setMolecule(struct).catch(() => {
                messageApi.error('加载化学结构失败')
            })
        }

        return () => {
            if (window.ketcher) {
                const {editor} = window.ketcher
                editor?.clear && editor?.clear()
            }
        }
    }, [struct])

    // init ketch
    const handleOnInit = async (ins: Ketcher) => {
        window.ketcher = ins
        if (struct) {
            await window.ketcher.setMolecule(struct)
        }
        // window.ketcher.editor.subscribe('change', (data) => console.log('11', data))
    }

    // 按钮配置
    const buttonConfig = useMemo(() => {
        const obj: ButtonsConfig = {}
        const hiddenButton = ['miew', 'about', 'help', 'images']
        hiddenButton.forEach(value => {
            obj[value] = {
                hidden: true
            }
        })
        return obj
    }, [isSimpleEditor])

    // 获取getSdf
    const getSdf = async (molfile: MolfileFormat = 'v2000') => {
        if (window.ketcher.containsReaction()) {
            messageApi.warning('该结构不能保存为*.SDF，由反应箭头表示。')
            return undefined
        }
        try {
            const res = await window.ketcher?.getSdf(molfile)
            return res
        } catch (e) {
            messageApi.warning('获取MOL失败')
        }
        return undefined
    }

    // 预览
    const preview3d = async () => {
        const res: string | undefined = await getSdf()
        if (res === undefined) {
            return
        }
        if (res === '') {
            messageApi.warning('内容为空')
            return
        }
        setMolStr(res)
        setPreviewModal(true)
    }

    // 添加到画布
    const addCanvas = () => {
        window
            .initRDKitModule()
            .then(function (RDKit: any) {
                console.log('RDKit version: ' + RDKit)
                window.RDKit = RDKit
                /**
                 * The RDKit module is now loaded.
                 * You can use it anywhere.
                 */
            })
            .catch(() => {
                // handle loading errors here...
            })
        // window.ketcher.addFragment('C1C=CC=CC=1.C1=CC=CC=C1')
    }

    const setSetting = async (key: keyof typeof leftBarFlg, setingKey: string) => {
        const calcVal = leftBarFlg[key] ? false : true
        const params = {[setingKey]: setingKey == 'showHydrogenLabels' ? calcVal ? 'all' : 'off' : calcVal}
        window.ketcher.editor.setOptions(JSON.stringify(params))
        setLeftBarFlag({...leftBarFlg, [key]: calcVal})
    }

    // 放大、缩小、重置
    const zoomChange = (val: number) => {
        if (val === 1) {
            window.ketcher.editor.zoom(val)
            setZoom(val)
            return
        }
        const getZoom = window.ketcher.editor.zoom()
        const calcVal = val + getZoom
        const num = calcVal >= 4 ? 4 : calcVal <= 0.2 ? 0.2 : calcVal
        window.ketcher.editor.zoom(num)
        setZoom(num)
    }

    // 全屏切换
    const toggleFullscreen = () => {
        const fullscreenElement: HTMLElement | null =
            document.querySelector('.ketcher-stage')
        try {
            const isFull = isFullScreen()
            isFull ? exitFullscreen() : requestFullscreen(fullscreenElement as HTMLElement)
        } finally {
            setTimeout(() => {
                window.ketcher.editor.centerStruct()
            }, 300)
        }
    }

    // 芳香化change
    const aromChange = (val: string, key: string) => {
        const {store, serverTransform} = window.jbyKetcher
        store.dispatch(serverTransform(val))
        setLeftBarFlag({...leftBarFlg, [key]: key === 'allH' ? !leftBarFlg[key] : val})
    }

    // 重置
    const resetView = async () => {
        setLeftBarFlag({
            arom: '',
            c: false,
            h: false,
            allH: false
        })
        zoomChange(1)
        await window.ketcher.setMolecule(struct)
    }

    const actionChange = ({action, val, key = ''}: IBarItem) => {
        switch (action) {
            case 'aromChange':
            case 'toggleAllHydrogens':
                aromChange(val as string, key)
                break
            case 'changeEl':
                setSetting(key as keyof typeof leftBarFlg, val as string)
                break
            case 'toggleFullscreen':
                toggleFullscreen()
                break
            case 'resetView':
                resetView()
                break
            case 'zoomChange':
                zoomChange(val as number)
                break
            default:
                return ''
        }
    }

    return (
        <>
            <div className={`${styles['ketcher-body']} ${isSimpleEditor ? 'ketcher-tool-hidden' : ''}`}>
                {contextHolder}
                <Editor
                    staticResourcesUrl={''}
                    errorHandler={() => {
                    }}
                    structServiceProvider={structServiceProvider}
                    onInit={handleOnInit}
                    togglerComponent={<div>
                        <Button size={'small'} onClick={preview3d}>3D</Button>
                    </div>}
                    buttons={buttonConfig}
                />
                {
                    isSimpleEditor && <div className={styles['simple-bottom-bar']}>
                        <div className={styles['bar-left']}>
                            {
                                editLeftBar.map((item, idx) => {
                                    if (item.group) {
                                        return <div className={styles['group']} key={idx}>
                                            {
                                                item.group.map((dd, idx1) => {
                                                    return <div key={idx1}
                                                                className={`${styles['bar-item']} ${styles[`${dd.val === leftBarFlg.arom ? 'active' : ''}`]}`}
                                                                dangerouslySetInnerHTML={{__html: dd.icon}}
                                                                onClick={() => actionChange(dd)}
                                                                title={dd.title}>

                                                    </div>
                                                })
                                            }
                                        </div>
                                    }
                                    return <div key={idx}
                                                onClick={() => actionChange(item)}
                                                className={`${styles['bar-item']} ${styles[`${leftBarFlg[item.key as keyof typeof leftBarFlg] ? 'active' : ''}`]}`}
                                                dangerouslySetInnerHTML={{__html: item.icon}} title={item.title}>

                                    </div>
                                })
                            }
                        </div>
                        <div className={styles['bar-right']}>
                            {
                                rightBar.map((item, idx) => {
                                    return <div key={idx} className={`${styles['bar-item']}`}
                                                onClick={() => actionChange(item)}
                                                dangerouslySetInnerHTML={{__html: item.icon}} title={item.title}>

                                    </div>
                                })
                            }
                        </div>
                    </div>
                }
            </div>
            <Modal className={styles['preview-modal']} footer={null} open={previewModal}
                   onCancel={() => setPreviewModal(false)} title={'3D预览'}
                   width={'62vw'}>
                <Ketcher3D struct={molStr}/>
            </Modal>
        </>
    )
}

export default KetcherMain
