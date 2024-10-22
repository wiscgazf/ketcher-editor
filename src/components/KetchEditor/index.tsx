import {FC, useEffect, useMemo, useState} from 'react'
// import Rdkit from '@rdkit/rdkit'
import {Button, Modal, message} from 'antd'
import {StandaloneStructServiceProvider} from 'ketcher-standalone'
import {Editor, ButtonsConfig} from 'ketcher-react'
import type {Ketcher, MolfileFormat} from 'ketcher-core'
import Ketcher3D from '../Ketcher3D'
import {
    bottomToolbarItemVariant, floatingToolItemVariant,
    leftToolbarItemVariant,
    rightToolbarItemVariant,
    topGroup,
    topToolbarItemVariant
} from '../../config/toolbar'
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
        const hiddenButton = ['miew', 'about', 'help', 'images'];
        [...leftToolbarItemVariant, ...topToolbarItemVariant, ...topGroup, ...bottomToolbarItemVariant, ...rightToolbarItemVariant, ...floatingToolItemVariant].forEach(value => {
            obj[value] = {
                hidden: isSimpleEditor ? true : hiddenButton.includes(value)
            }
        })
        return obj
    }, [isSimpleEditor])

    // 获取getMolfile
    const getMolfile = async (molfile: MolfileFormat = 'v2000') => {
        if (window.ketcher.containsReaction()) {
            messageApi.warning('该结构不能保存为*.MOL，由反应箭头表示。')
            return undefined
        }
        try {
            const res = await window.ketcher?.getMolfile(molfile)
            return res
        } catch (e) {
            messageApi.warning('获取MOL失败')
        }
        return undefined
    }

    // 预览
    const preview3d = async () => {
        // const res = await ketcher?.setMolecule(mol)
        const res: string | undefined = await getMolfile()
        if (res === undefined) {
            messageApi.warning('3D预览解析失败，请查看分子式结构是否有误~')
            return
        }
        if (res === '') {
            messageApi.warning('内容为空')
            return
        }
        setMolStr(res)
        setPreviewModal(true)
        // window.ketcher.addFragment(res)
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

    const setSetting = async () => {
        await window.ketcher.setMolecule('https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/CID/20392/record/SDF?record_type=2d&response_type=display')
        // const params = {showHydrogenLabels: 'all'}
        // window.ketcher.editor.setOptions(JSON.stringify(params))
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

    // 芳香化change
    const aromChange = (val: string) => {

    }

    return (
        <>
            <div key={1} className={`${styles['ketcher-body']} ${isSimpleEditor ? 'ketcher-tool-hidden' : ''}`}>
                {contextHolder}
                <Editor
                    staticResourcesUrl={''}
                    errorHandler={() => {
                    }}
                    structServiceProvider={structServiceProvider}
                    onInit={handleOnInit}
                    togglerComponent={<div>
                        <Button size={'small'} onClick={() => aromChange('aromatize')}>芳香化</Button>
                        <Button size={'small'} onClick={() => aromChange('dearomatize')}>取消芳香化</Button>
                        <Button size={'small'} onClick={preview3d}>3D</Button>
                        <Button size={'small'} onClick={setSetting}>显示H</Button>
                        <Button size={'small'} onClick={() => zoomChange(0.1)}>+</Button>
                        <Button size={'small'} onClick={() => zoomChange(-0.1)}>-</Button>
                        <Button size={'small'} onClick={() => zoomChange(1)}>O</Button>
                    </div>}
                    buttons={buttonConfig}
                />
                {
                    isSimpleEditor && <div className={styles['simple-bottom-bar']}>
                        <div className={styles['bar-left']}>
                            <div className={styles['mode']}>
                                {
                                    models.map((title, idx) => {
                                        return <div className={`${styles['bar-item']} ${styles[`model${idx + 1}`]}`}
                                                    key={idx} title={title}>
                                        </div>
                                    })
                                }
                            </div>
                            <div className={`${styles['bar-item']} ${styles['bar-item-h']}`}>
                            </div>
                            <div className={`${styles['bar-item']} ${styles['bar-item-play']}`}>
                            </div>
                        </div>
                        <div className={styles['bar-right']}>
                            <div className={`${styles['bar-item']} ${styles['bar-item-full']}`}>
                            </div>
                            <div className={`${styles['bar-item']} ${styles['bar-item-reset']}`}>
                            </div>
                            <div className={`${styles['bar-item']} ${styles['bar-item-zoom-in']}`}>
                            </div>
                            <div className={`${styles['bar-item']} ${styles['bar-item-zoom-out']}`}>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Modal key={2} className={styles['preview-modal']} footer={null} open={previewModal}
                   onCancel={() => setPreviewModal(false)} title={'3D预览'}
                   width={'62vw'}>
                <Ketcher3D struct={molStr}/>
            </Modal>
        </>
    )
}

export default KetcherMain
