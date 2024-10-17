import type {Ketcher} from 'ketcher-core'

declare global {
    interface Window {
        ketcher: Ketcher
        jbyFonts: any
        miew: any
        initRDKitModule: any
        RDKit: any
    }
}
