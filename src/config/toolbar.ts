import {
    LeftToolbarItemVariant,
    TopToolbarItemVariant,
    BottomToolbarItemVariant,
    RightToolbarItemVariant,
    FloatingToolItemVariant
} from 'ketcher-react/dist/script/ui/views/toolbars/toolbar.types'

export const leftToolbarItemVariant: LeftToolbarItemVariant[] = ['hand', 'select', 'select-lasso', 'select-rectangle', 'select-fragment', 'erase', 'bonds', 'bond-common', 'bond-single', 'bond-double', 'bond-triple', 'bond-dative', 'bond-stereo', 'bond-up', 'bond-down', 'bond-updown', 'bond-crossed', 'bond-query', 'bond-special', 'bond-any', 'bond-hydrogen', 'bond-aromatic', 'bond-singledouble', 'bond-singlearomatic', 'bond-doublearomatic', 'chain', 'charge-plus', 'charge-minus', 'sgroup', 'reaction-plus', 'arrows', 'reaction-arrow-open-angle', 'reaction-arrow-filled-triangle', 'reaction-arrow-filled-bow', 'reaction-arrow-dashed-open-angle', 'reaction-arrow-failed', 'reaction-arrow-retrosynthetic', 'reaction-arrow-both-ends-filled-triangle', 'reaction-arrow-equilibrium-filled-half-bow', 'reaction-arrow-equilibrium-filled-triangle', 'reaction-arrow-equilibrium-open-angle', 'reaction-arrow-unbalanced-equilibrium-filled-half-bow', 'reaction-arrow-unbalanced-equilibrium-open-half-angle', 'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow', 'reaction-arrow-unbalanced-equilibrium-filled-half-triangle', 'reaction-arrow-elliptical-arc-arrow-filled-bow', 'reaction-arrow-elliptical-arc-arrow-filled-triangle', 'reaction-arrow-elliptical-arc-arrow-open-angle', 'reaction-arrow-elliptical-arc-arrow-open-half-angle', 'reaction-arrow-multitail', 'reaction-mapping-tools', 'reaction-automap', 'reaction-map', 'reaction-unmap', 'rgroup', 'rgroup-label', 'rgroup-fragment', 'rgroup-attpoints', 'shapes', 'shape-ellipse', 'shape-rectangle', 'shape-line', 'text', 'images']
export const topToolbarItemVariant: TopToolbarItemVariant[] = ['clear', 'open', 'save', 'undo', 'redo', 'cut', 'copies', 'copy', 'copy-image', 'copy-mol', 'copy-ket', 'paste', 'zoom-in', 'zoom-out', 'zoom-list', 'layout', 'clean', 'arom', 'dearom', 'cip', 'check', 'analyse', 'recognize', 'miew', 'settings', 'help', 'about']
export const topGroup: string[] = ['document', 'edit', 'zoom', 'process', 'meta', 'hand', 'select', 'bond', 'charge', 'transform', 'sgroup', 'rgroup', 'shape', 'text', 'template-common', 'template-lib', 'atom', 'period-table']
export const bottomToolbarItemVariant: BottomToolbarItemVariant[] = ['template-common', 'template-lib', 'enhanced-stereo', 'fullscreen']
export const rightToolbarItemVariant: RightToolbarItemVariant[] = ['atom', 'freq-atoms', 'period-table', 'extended-table', 'any-atom']
export const floatingToolItemVariant: FloatingToolItemVariant[] = ['transform-flip-h', 'transform-flip-v', 'erase']

