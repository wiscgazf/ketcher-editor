import React from 'react'
import {ConfigProvider} from 'antd'
import Editor from './components/Editor'
import './App.css'

function App() {
    return (
        <ConfigProvider theme={{token: {colorPrimary: '#0A93FCDD'}}}>
            <Editor/>
        </ConfigProvider>
    )
}

export default App
