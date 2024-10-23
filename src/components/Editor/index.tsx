import {useState, useEffect} from 'react'
import KetchEditor from '../KetchEditor'
import Ketcher3D from '../Ketcher3D'
import styles from './index.module.scss'
import {IOptions} from '../../shims-window'

type EditType = '3d' | 'edit'

const Editor = () => {
    const [type, setType] = useState<EditType | string>('')
    const [struct, setStruct] = useState<string>('')
    const [isSimpleEditor, setIsSimpleEditor] = useState<boolean>(true)

    // 提供iframe 全局window
    useEffect(() => {
        window.defineExports = () => {
            return {
                initEdit,
                setEditType,
                setEditIsSimple,
                setSdfStruct
            }
        }
    }, [])

    // 初始化
    const initEdit = (options: IOptions) => {
        setEditType(options.type || 'edit')
        setSdfStruct(options.struct || '')
        setEditIsSimple(options.editMode === 'normal' ? false : true)
    }

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
    </div>
}

export default Editor
