import React, {useEffect} from 'react'
import {ConfigProvider} from 'antd'
import KetcherMain from './components/KetchEditor'
import './App.css'

function App() {
    /**
     * 定义化学编辑器字体相关 源码是通过enum映射+toLowerCase,
     * 无法通过替换字符改成中文 影响太大，
     * 解决方案：
     * 1、定义全局映射
     * 2、在指定源码进行替换
     * */
    useEffect(() => {
        window.jbyFonts = {
            BOLD: '加粗',
            ITALIC: '斜体',
            SUBSCRIPT: '上标',
            SUPERSCRIPT: '下标'
        }
    }, [])
    return (
        <ConfigProvider theme={{token: {colorPrimary: '#0A93FCDD'}}}>
            <KetcherMain/>
        </ConfigProvider>
    )
}

export default App
