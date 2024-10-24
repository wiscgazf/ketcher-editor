import {useState, useEffect} from 'react'
import {Segmented} from 'antd'
import KetchEditor from '../KetchEditor'
import Ketcher3D from '../Ketcher3D'
import styles from './index.module.scss'
import {IOptions} from '../../shims-window'
import {debounce} from '../../utils'

type EditType = '3d' | 'edit'

const Editor = () => {
    const [type, setType] = useState<EditType | string>('')
    const [struct, setStruct] = useState<string>('')
    const [isSimpleEditor, setIsSimpleEditor] = useState<boolean>(true)
    const [isShowStructTab, setIsShowStructTab] = useState<boolean>(false)
    const [tabActive, setTabActive] = useState<string>('2D 结构')

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            initEdit({
                struct: '',
                type: 'edit',
                editMode: 'normal'
            })
        }

        // 监听父页面数据
        window.addEventListener('message', (event) => {
            if (event.origin.includes('localhost:8080') || event.origin.includes('xinjiaoyu')) {
                if (event.data && event.data.length < 150) {
                    try {
                        const res = JSON.parse(event.data)
                        initEdit(res)
                    } catch (err) {

                    }
                }
            }
        })

        // 抛出加载成功
        window.parent.postMessage('loaded', '*')
    }, [])

    // 初始化
    const initEdit = debounce((options: IOptions) => {
        setEditType(options.type || 'edit')
        setSdfStruct(options.struct || '')
        setEditIsSimple(options.editMode === 'normal' ? false : true)
        if (options.extra) {
            const {threeStruct} = options.extra
            setIsShowStructTab(options.extra.showStructTab)
            setTabActive(threeStruct ? '3D 结构' : '2D 结构')
        }
    }, 200)

    // 设置编辑器类型
    const setEditType = (val: string) => {
        setType(val)
    }

    // 设置是否是简单版编辑器
    const setEditIsSimple = (val: boolean) => {
        setIsSimpleEditor(val)
    }

    // 设置结构
    const setSdfStruct = (str: string) => {
        setStruct(str)
    }

    return <div className={`${styles['ketcher-main']} ketcher-stage`}>
        {
            type === '3d' && <Ketcher3D struct={struct}/>
        }
        {
            type === 'edit' && <KetchEditor isSimpleEditor={isSimpleEditor} struct={struct}/>
        }
        {
            isShowStructTab && isSimpleEditor && <div className={styles['tab']}>
                <Segmented<string>
                    options={['3D 结构', '2D 结构']}
                    defaultValue={tabActive}
                    onChange={(value) => {
                        setTabActive(value)
                        setEditType(value === '3D 结构' ? '3d' : 'edit')
                    }}
                />
            </div>
        }
    </div>
}

export default Editor
