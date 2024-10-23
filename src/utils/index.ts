export const requestFullscreen = (element: HTMLElement) => {
    (element.requestFullscreen && element.requestFullscreen()) ||
    ((element as any).msRequestFullscreen && (element as any).msRequestFullscreen()) ||
    ((element as any).mozRequestFullScreen && (element as any).mozRequestFullScreen()) ||
    ((element as any).webkitRequestFullscreen && (element as any).webkitRequestFullscreen())
}

export const exitFullscreen = () => {
    (document.exitFullscreen && document.exitFullscreen()) ||
    ((document as any).msExitFullscreen && (document as any).msExitFullscreen()) ||
    ((document as any).mozCancelFullScreen && (document as any).mozCancelFullScreen()) ||
    ((document as any).webkitExitFullscreen && (document as any).webkitExitFullscreen())
}

// @ts-ignore
export const isFullScreen = () => {
    return !!(
        document.fullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
    )
}
