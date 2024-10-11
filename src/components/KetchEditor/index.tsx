import {FC, useState, useRef, useEffect, ChangeEvent} from 'react'
import {StandaloneStructServiceProvider} from 'ketcher-standalone'
import {Editor} from 'ketcher-react'
import type {Ketcher, MolfileFormat} from 'ketcher-core'
import Miew from 'miew'
import 'miew/dist/miew.min.css'
import 'ketcher-react/dist/index.css'
import styles from './index.module.scss'

interface IProps {
    initData?: string
}

const structServiceProvider = new StandaloneStructServiceProvider()
const KetcherMain: FC<IProps> = () => {
    // ketcher 实例
    const [ketcher, setKetcher] = useState<Ketcher | null>(null)

    // 预览 dom ref
    const previewDom = useRef<HTMLDivElement | null>(null)

    // 初始化3d预览
    useEffect(() => {
        if (!previewDom.current) {
            return
        }
        global.miew = new Miew({
            container: previewDom.current,
            load: '',
            settings: {
                camDistance: 4,
                axes: false,
                zooming: true,
                resolution: 'high',
                editing: true,
                autoRotation: 0,
            },
        })
        if (global.miew.init()) {
            global.miew.run()
        }
    }, [])

    // init ketch
    const handleOnInit = async (ins: Ketcher) => {
        global.ketcher = ins
        setKetcher(ins)
        console.log('11---', global)
        // global.ketcher.editor.subscribe('change', (data) => console.log(data))
        transformChinese()
    }

    // language transform to chinese
    const transformChinese = () => {
        const topBars = document.querySelectorAll('[title]')
        console.log('111', topBars)
    }

    // 获取getSmiles
    const getMolfile = async (molfile: MolfileFormat = 'v2000') => {
        global.ketcher.setSettings({'showAtomIds': 'true'})
        const res = await ketcher?.getMolfile(molfile)
        return res || ''
    }

    // 预览
    const preview3d = async () => {
        if (!global.miew) {
            return
        }
        // const res = await ketcher?.setMolecule(mol)
        const res: string = await getMolfile()
        const previewFile: File = stringToFile(res || '')

        global.miew.load(previewFile).then(() => {
            global.miew.settings.set('autoRotation', 0.1)
        })
    }

    // 字符串转File
    const stringToFile = (content: string) => {
        const blob = new Blob([content], {type: 'text/plain'})
        const file = new File([blob], `${Date.now()}.sdf`, {type: 'text/plain'})
        return file
    }

    // 切换模型
    const changeMode = (event: ChangeEvent) => {
        const val = (event.target as { value: string }).value
        global.miew.rep({mode: val})
    }

    // 切换颜色
    const changeColors = (event: ChangeEvent) => {
        const val = (event.target as { value: string }).value
        global.miew.rep({colorer: val})
    }

    // 切换主题
    const changeMaterial = (event: ChangeEvent) => {
        const val = (event.target as { value: string }).value
        global.miew.rep({material: val})
    }

    // 切换调色板
    const changePalette = (event: ChangeEvent) => {
        const val = (event.target as { value: string }).value
        global.miew.settings.set('palette', val)
    }

    return (
        <div className={styles['ketcher-main']}>
            <div className={styles['ketcher-body']}>
                <Editor
                    structServiceProvider={structServiceProvider}
                    onInit={handleOnInit}
                    buttons={{
                        'settings': {
                            hidden: false,
                        }, 'miew': {
                            hidden: true,
                        }
                    }}
                />
            </div>
            <div className={styles['preview-body']}>
                <div className={styles['tool-main']}>
                    <button onClick={() => getMolfile()}>获取getMolfile</button>
                    <button onClick={preview3d}>预览</button>
                    <span>模型</span>
                    <select name="模型" id="" onChange={changeMode}>
                        <option value="BS">球棍模型</option>
                        <option value="LN">线模型</option>
                        <option value="LC">棍模型</option>
                        <option value="VW">球模型</option>
                        <option value="QS">QS模型</option>
                        <option value="SA">SA模型</option>
                        <option value="SE">SE模型</option>
                        <option value="CS">CS模型</option>
                    </select>
                    <span>颜色</span>
                    <select name="颜色" id="" onChange={changeColors}>
                        <option value="EL">EL</option>
                        <option value="RT">RT</option>
                        <option value="SQ">SQ</option>
                        <option value="CH">CH</option>
                        <option value="SS">SS</option>
                        <option value="UN">UN</option>
                        <option value="CO">CO</option>
                        <option value="CF">CF</option>
                        <option value="TM">TM</option>
                        <option value="OC">OC</option>
                        <option value="HY">HY</option>
                        <option value="MO">MO</option>
                        <option value="CB">CB</option>
                    </select>
                    <span>主题</span>
                    <select name="主题" id="" onChange={changeMaterial}>
                        <option value="SF">SF</option>
                        <option value="DF">DF</option>
                        <option value="PL">PL</option>
                        <option value="ME">ME</option>
                        <option value="TR">TR</option>
                        <option value="GL">GL</option>
                        <option value="BA">BA</option>
                        <option value="TN">TN</option>
                        <option value="FL">FL</option>
                    </select>
                    <span>调色板</span>
                    <select name="调色板" id="" onChange={changePalette}>
                        <option value="JM">JM</option>
                        <option value="CP">CP</option>
                        <option value="VM">VM</option>
                    </select>
                </div>
                <div className={styles['preview-3d']} ref={previewDom}></div>
            </div>
        </div>
    )
}

export default KetcherMain
