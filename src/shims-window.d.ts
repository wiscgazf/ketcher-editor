import type {Ketcher} from 'ketcher-core'

interface IJbyKetcher {
    getFormatMimeTypeByFileName: (fileName: string) => string;
    load: (struct: string, options?: Object) => any;
    serverTransform: (method: string, data?: any, struct?: string) => any;
    store: any
}

export interface IExtra {
    showStructTab: boolean
    threeStruct?: string
    threeStructList?: string[]
}

export interface IOptions {
    struct: string
    type: '3d' | 'edit'
    editMode: 'simple' | 'normal'
    extra?: IExtra
}

declare global {
    interface Window {
        // 编辑器实例
        ketcher: Ketcher
        miew: any
        // （这个是源码中进行了更改，loader方式）抛出的ketcher-react包中没公开的方法 可用于自定义按钮 具体查看源码 ketcher-react2.25.0 Open.Container.tsx
        jbyKetcher: IJbyKetcher
        // 抛给vue的方法
        defineExports: Function
        initRDKitModule: any
        RDKit: any
    }
}
