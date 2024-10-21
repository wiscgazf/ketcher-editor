import React from 'react'
import {ConfigProvider} from 'antd'
import KetcherMain from './components/KetchEditor'
import './App.css'

function App() {
    return (
        <ConfigProvider theme={{token: {colorPrimary: '#0A93FCDD'}}}>
            <KetcherMain/>
        </ConfigProvider>
    )
}

export default App
