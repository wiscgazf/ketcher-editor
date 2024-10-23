import React from 'react'
import {ConfigProvider} from 'antd'
import Editor from './components/Editor'
import './App.css'

function App() {
    return (
        <ConfigProvider theme={{
            token: {colorPrimary: '#0A93FCDD'}, components: {
                Segmented: {
                    itemSelectedBg: '#0A93FCDD',
                    itemSelectedColor: '#fff',
                    itemHoverBg: '#fff',
                    itemHoverColor: '#0A93FCDD',
                    itemActiveBg: '#fff',
                    trackPadding: 0
                }
            }
        }}>
            <Editor/>
        </ConfigProvider>
    )
}

export default App
