import {FC, useState, useRef, useEffect} from 'react'
// import Rdkit from '@rdkit/rdkit'
import {Button, Modal, message} from 'antd'
import {StandaloneStructServiceProvider} from 'ketcher-standalone'
import {Editor} from 'ketcher-react'
import type {Ketcher, MolfileFormat} from 'ketcher-core'
import Ketcher3D from '../Ketcher3D'
import 'miew/dist/Miew.min.css'
import 'ketcher-react/dist/index.css'
import styles from './index.module.scss'

interface IProps {
    initData?: string
}

const structServiceProvider = new StandaloneStructServiceProvider()
const KetcherMain: FC<IProps> = () => {
    // ketcher 实例
    const [ketcher, setKetcher] = useState<Ketcher | null>(null)
    // MOL 结构的字符串
    const [molStr, setMolStr] = useState<string>('')
    // 预览弹窗
    const [previewModal, setPreviewModal] = useState<boolean>(false)

    const [messageApi, contextHolder] = message.useMessage()

    // init ketch
    const handleOnInit = async (ins: Ketcher) => {
        window.ketcher = ins
        setKetcher(ins)
        // window.ketcher.editor.subscribe('click', (data) => console.log(data))
    }

    // 获取getMolfile
    const getMolfile = async (molfile: MolfileFormat = 'v2000') => {
        if (window.ketcher.containsReaction()) {
            messageApi.warning('该结构不能保存为*.MOL，由反应箭头表示。')
            return undefined
        }
        try {
            const res = await ketcher?.getMolfile(molfile)
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

    const setSetting = () => {
        const params = {showHydrogenLabels: 'all'}
        window.ketcher.editor.setOptions(JSON.stringify(params))
    }

    return (
        <div className={styles['ketcher-main']}>
            {contextHolder}
            <div className={styles['ketcher-body']}>
                <Editor
                    staticResourcesUrl={''}
                    errorHandler={() => {
                    }}
                    structServiceProvider={structServiceProvider}
                    onInit={handleOnInit}
                    buttons={{
                        'settings': {
                            hidden: false,
                        }, 'miew': {
                            hidden: true,
                        }, 'help': {
                            hidden: true,
                        }, 'about': {
                            hidden: true,
                        }
                    }}
                />
            </div>
            <div className={styles['preview-body']}>
                <div className={styles['tool-main']}>
                    <span>临时操作按钮：</span>
                    <Button onClick={preview3d}>3D预览</Button>
                    <Button onClick={setSetting}>显示所有H</Button>
                </div>
            </div>
            <Modal className={styles['preview-modal']} footer={null} open={previewModal}
                   onCancel={() => setPreviewModal(false)} title={'3D预览'}
                   width={'62vw'}>
                <Ketcher3D molStr={molStr}/>
            </Modal>
        </div>
    )
}

export default KetcherMain
