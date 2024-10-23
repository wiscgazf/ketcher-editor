import type {Ketcher} from 'ketcher-core'

interface IJbyKetcher {
    getFormatMimeTypeByFileName: (fileName: string) => string;
    load: (struct: string, options?: Object) => any;
    serverTransform: (method: string, data?: any, struct?: string) => any;
    store: any
}

export interface IOptions {
    struct: string
    type: '3d' | 'edit',
    editMode: 'simple' | 'normal'
}

declare global {
    interface Window {
        ketcher: Ketcher
        miew: any
        jbyKetcher: IJbyKetcher
        defineExports: Function
        initRDKitModule: any
        RDKit: any
    }
}
