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
        window.jbyInitEdit = initEdit
    }, [])

    // 初始化
    const initEdit = (options: IOptions) => {
        setType(options.type || 'edit')
        setStruct(options.struct || '')
        setIsSimpleEditor(options.editMode === 'normal' ? false : true)
    }

    return <div className={styles['ketcher-main']}>
        {
            type === '3d' && <Ketcher3D struct={struct}/>
        }
        {
            type === 'edit' && <KetchEditor isSimpleEditor={isSimpleEditor} struct={struct}/>
        }
    </div>
}

export default Editor
