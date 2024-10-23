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

export function debounce(func: Function, delay = 200) {
    let timerId: NodeJS.Timeout

    return function (...args: any[]) {
        clearTimeout(timerId)

        timerId = setTimeout(() => {
            // @ts-ignore
            func.apply(this, args)
        }, delay)
    }
}
