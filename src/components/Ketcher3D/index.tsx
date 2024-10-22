import {FC, useEffect, useRef, useState} from 'react'
import {Button, Select, message} from 'antd'
import styles from './index.module.scss'
import Miew from 'miew'

interface IProps {
    struct: string
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
    }, {
        title: '棒状模型',
        value: 'LC'
    }, {
        title: '空间填充模型',
        value: 'VW'
    },
    /*{
        title: '线模型',
        value: 'LN'
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
    }*/
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


const requestFullscreen = (element: HTMLElement) => {
    (element.requestFullscreen && element.requestFullscreen()) ||
    ((element as any).msRequestFullscreen && (element as any).msRequestFullscreen()) ||
    ((element as any).mozRequestFullScreen && (element as any).mozRequestFullScreen()) ||
    ((element as any).webkitRequestFullscreen && (element as any).webkitRequestFullscreen())
}

const exitFullscreen = () => {
    (document.exitFullscreen && document.exitFullscreen()) ||
    ((document as any).msExitFullscreen && (document as any).msExitFullscreen()) ||
    ((document as any).mozCancelFullScreen && (document as any).mozCancelFullScreen()) ||
    ((document as any).webkitExitFullscreen && (document as any).webkitExitFullscreen())
}

// @ts-ignore
const isFullScreen = () => {
    return !!(
        document.fullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
    )
}

const Ketcher3D: FC<IProps> = (props) => {
    // 预览 dom ref
    const previewDom = useRef<HTMLDivElement | null>(null)
    // 模型
    const [model, setModel] = useState<ModelsType>('BS')
    // 全屏
    const [fullScreenMode, setFullScreenMode] = useState(isFullScreen())

    const [animateSta, setAnimateSta] = useState<boolean>(false)
    const [messageApi, contextHolder] = message.useMessage()

    useEffect(() => {
        if (!previewDom.current) {
            return
        }
        if (window.miew) {
            preview3D(props.struct)
            return
        }
        window.miew = new Miew({
            container: previewDom.current,
            load: '',
            settings: {
                camDistance: 5,
                axes: false,
                fps: false,
                zooming: true,
                resolution: 'high',
                editing: true,
                autoRotation: 0,
                fogFarFactor: 3,
                ao: true,
                aromatic: true,
                autoResolution: true
            },
        })
        if (window.miew.init()) {
            window.miew.run()
            setTimeout(() => {
                preview3D(props.struct)
            }, 200)
        }
    }, [props.struct])

    // 预览3d
    const preview3D = (mol: string) => {
        const previewFile: File = stringToFile(mol || '')
        window.miew.load(previewFile).then(() => {
            console.log('load 3d success~')
        }).catch((err: any) => {
            messageApi.destroy()
            messageApi.open({
                type: 'warning',
                content: '3D预览解析失败，请查看分子式结构是否有误~'
            })
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

    /**
     * TODO 保留一下，方法不好查找
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
     }*/

        // 全屏切换
    const toggleFullscreen = () => {
            const fullscreenElement: HTMLElement | null =
                document.querySelector('.' + styles['preview-3d-wrapper'])
            setFullScreenMode(() => {
                const isFull = isFullScreen()
                isFull ? exitFullscreen() : requestFullscreen(fullscreenElement as HTMLElement)
                return !isFull
            })
        }

    // 放大缩小画布
    const zoomChange = (val: number) => {
        window.miew.scale(val)
    }

    // 重置
    const resetView = () => {
        preview3D(props.struct)
    }

    // 动画change
    const playChange = () => {
        setAnimateSta(!animateSta)
        window.miew.settings.set('autoRotation', animateSta ? 0 : 0.2)
    }

    return <div className={styles['preview-3d-wrapper']}>
        {contextHolder}
        <div className={styles['preview-3d']} ref={previewDom}></div>
        <div>
            <div className={styles['simple-bottom-bar']}>
                <div className={styles['bar-left']}>
                    <div className={styles['mode']}>
                        {
                            models.map((item, idx) => {
                                return <div
                                    className={`${styles['bar-item']} ${styles[`model${idx + 1}`]} ${item.value === model ? `${styles['active']}` : ''}`}
                                    key={idx} title={item.title} onClick={() => changeModel(item.value)}>
                                </div>
                            })
                        }
                    </div>
                    <div className={`${styles['bar-item']} ${styles['bar-item-h']}`}>
                    </div>
                    <div
                        className={`${styles['bar-item']} ${styles['bar-item-play']} ${animateSta ? `${styles['active']}` : ''}`}
                        onClick={playChange}>
                    </div>
                </div>
                <div className={styles['bar-right']}>
                    <div className={`${styles['bar-item']} ${styles['bar-item-full']}`} onClick={toggleFullscreen}>
                    </div>
                    <div className={`${styles['bar-item']} ${styles['bar-item-reset']}`} onClick={resetView}>
                    </div>
                    <div className={`${styles['bar-item']} ${styles['bar-item-zoom-in']}`}
                         onClick={() => zoomChange(1.1)}>
                    </div>
                    <div className={`${styles['bar-item']} ${styles['bar-item-zoom-out']}`}
                         onClick={() => zoomChange(0.9)}>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Ketcher3D
