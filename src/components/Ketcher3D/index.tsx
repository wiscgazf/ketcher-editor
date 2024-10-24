import {FC, useEffect, useRef, useState, memo} from 'react'
import {message} from 'antd'
import styles from './index.module.scss'
import {requestFullscreen, isFullScreen, exitFullscreen, debounce} from '../../utils'
import Miew from 'miew'
import {threeDLeftBar, rightBar, IBarItem} from '../../config/customBar'

interface IProps {
    struct: string
}

// 模型
/**
 * const models: IModels[] = [
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
 {
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
 }
 ]*/

/**
 * 保留
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
 ]*/

const Ketcher3D: FC<IProps> = (props) => {
    // 预览 dom ref
    const previewDom = useRef<HTMLDivElement | null>(null)
    // 模型
    const [model, setModel] = useState<string>('BS')

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
            preview3D(props.struct)
        }

        return () => {
            window.miew && window.miew.unload()
            window.miew = null
        }
    }, [props.struct])

    // 预览3d
    const preview3D = debounce((sdf: string) => {
        const previewFile: File = stringToFile(sdf || '')
        window.miew.load(previewFile).then(() => {
            console.log('load 3d success~')
        }).catch((err: any) => {
            messageApi.destroy()
            messageApi.open({
                type: 'warning',
                content: sdf ? '3D预览解析失败，请查看分子式结构是否有误~' : '化学结构内容为空~'
            })
        })
    }, 100)

    // mol字符串转File
    const stringToFile = (content: string) => {
        const blob = new Blob([content], {type: 'text/plain'})
        const file = new File([blob], `${Date.now()}.sdf`, {type: 'text/plain'})
        return file
    }

    // 切换模型
    const changeModel = (value: string) => {
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
            const isFull = isFullScreen()
            isFull ? exitFullscreen() : requestFullscreen(fullscreenElement as HTMLElement)
        }

    // 放大缩小画布
    const zoomChange = (val: number) => {
        window.miew.scale(val)
    }

    // 重置
    const resetView = () => {
        changeModel('BS')
        preview3D(props.struct)
    }

    // 动画change
    const playChange = () => {
        setAnimateSta(!animateSta)
        window.miew.settings.set('autoRotation', animateSta ? 0 : 0.2)
    }

    const actionChange = ({val, action = ''}: IBarItem) => {
        switch (action) {
            case 'playChange':
                playChange()
                break
            case 'changeModel':
                changeModel(val as string)
                break
            case 'resetView':
                resetView()
                break
            case 'zoomChange':
                zoomChange(1 + (val as number))
                break
            case 'toggleFullscreen':
                toggleFullscreen()
                break
            default:
                return ''
        }
    }

    return <div className={styles['preview-3d-wrapper']}>
        {contextHolder}
        <div className={styles['preview-3d']} ref={previewDom}></div>
        <div>
            <div className={styles['simple-bottom-bar']}>
                <div className={styles['bar-left']}>
                    {
                        threeDLeftBar.map((item, idx) => {
                            if (item.group) {
                                return <div className={styles['group']} key={idx}>
                                    {
                                        item.group.map((dd, idx1) => {
                                            return <div key={idx1}
                                                        className={`${styles['bar-item']} ${styles[`${dd.val === model ? 'active' : ''}`]}`}
                                                        dangerouslySetInnerHTML={{__html: dd.icon}}
                                                        onClick={() => actionChange(dd)}
                                                        title={dd.title}>

                                            </div>
                                        })
                                    }
                                </div>
                            }
                            return <div key={idx}
                                        className={`${styles['bar-item']} ${styles[`${item.val === 'animation' && animateSta ? 'active' : ''}`]}`}
                                        dangerouslySetInnerHTML={{__html: item.icon}} title={item.title}
                                        onClick={() => actionChange(item)}
                            >

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
        </div>
    </div>
}

export default memo(Ketcher3D, (prevProps, nextProps) => prevProps.struct === nextProps.struct)
