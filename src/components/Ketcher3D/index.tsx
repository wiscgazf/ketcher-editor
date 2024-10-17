import {FC, useEffect, useRef, useState} from 'react'
import {Button, Select} from 'antd'
import styles from './index.module.scss'
import Miew from 'miew'

interface IProps {
    molStr: string
}


interface IModels {
    title: string
    value: string
}

// 模型
const models: IModels[] = [
    {
        title: '球棍模型',
        value: 'BS'
    },
    {
        title: '线模型',
        value: 'LN'
    }, {
        title: '棍模型',
        value: 'LC'
    }, {
        title: '球模型',
        value: 'VW'
    }, {
        title: 'QS模型',
        value: 'QS'
    }, {
        title: 'SA模型',
        value: 'SA'
    }, {
        title: 'SE模型',
        value: 'SE'
    }, {
        title: 'CS模型',
        value: 'CS'
    }
]

type ModelsType = typeof models[number]['value'];

// 颜色
const colors: string[] = [
    'EL', 'RT', 'SQ', 'CH', 'SS', 'UN', 'CO', 'CF', 'TM', 'OC', 'HY', 'MO', 'CB'
]

// 主题
const themes = [
    'SF', 'DF', 'PL', 'ME', 'TR', 'GL', 'BA', 'TN', 'FL'
]

// 调色板
const palettes = [
    'JM', 'CP', 'VM'
]

const Ketcher3D: FC<IProps> = (props) => {
    // 预览 dom ref
    const previewDom = useRef<HTMLDivElement | null>(null)
    // 模型
    const [model, setModel] = useState<ModelsType>('BS')
    // 颜色
    const [color, setColor] = useState<string>('EL')
    // 主题
    const [theme, setTheme] = useState<string>('SF')
    // 调色板
    const [palette, setPalette] = useState<string>('JM')


    useEffect(() => {
        if (!previewDom.current) {
            return
        }
        if (window.miew) {
            preview3D(props.molStr)
            return
        }
        window.miew = new Miew({
            container: previewDom.current,
            load: '',
            settings: {
                camDistance: 5,
                axes: false,
                zooming: true,
                resolution: 'high',
                editing: true,
                autoRotation: 0,
                fogFarFactor: 3
            },
        })
        if (window.miew.init()) {
            window.miew.run()
        }
    }, [props.molStr])

    // 预览3d
    const preview3D = (mol: string) => {
        const previewFile: File = stringToFile(mol || '')
        window.miew.load(previewFile).then(() => {
            window.miew.settings.set('autoRotation', 0.1)
        }).catch((err: any) => {
            alert('3D预览解析失败，请查看分子式结构是否有误~')
        })
    }

    // mol字符串转File
    const stringToFile = (content: string) => {
        const blob = new Blob([content], {type: 'text/plain'})
        const file = new File([blob], `${Date.now()}.mol`, {type: 'text/plain'})
        return file
    }

    // 切换模型
    const changeModel = (value: ModelsType) => {
        setModel(value)
        window.miew.rep({mode: value})
    }

    // 切换颜色
    const changeColors = (value: string) => {
        setColor(value)
        window.miew.rep({colorer: value})
    }

    // 切换主题
    const changeMaterial = (value: string) => {
        setTheme(value)
        window.miew.rep({material: value})
    }

    // 切换调色板
    const changePalette = (value: string) => {
        setPalette(value)
        window.miew.settings.set('palette', value)
    }

    return <div className={styles['preview-3d-wrapper']}>
        <div className={styles['btm-btns']}>
            <Button type="link" danger>
                模型
            </Button>
            <Select
                value={model}
                onChange={changeModel}
                options={models.map(item => ({label: item.title, value: item.value}))}
            />
            <Button type="link" danger>
                颜色
            </Button>
            <Select
                value={color}
                onChange={changeColors}
                options={colors.map(item => ({label: item, value: item}))}
            />
            <Button type="link" danger>
                主题
            </Button>
            <Select
                value={theme}
                onChange={changeMaterial}
                options={themes.map(item => ({label: item, value: item}))}
            />
            <Button type="link" danger>
                调色板
            </Button>
            <Select
                value={palette}
                onChange={changePalette}
                options={palettes.map(item => ({label: item, value: item}))}
            />
        </div>
        <div className={styles['preview-3d']} ref={previewDom}></div>
    </div>
}

export default Ketcher3D
