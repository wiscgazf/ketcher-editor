const { override, addWebpackModuleRule } = require('customize-cra')
const path = require('path')

// 英译汉
const translateLoader = () => {
    return addWebpackModuleRule({
        test: /\.js$/, // 匹配需要处理的文件类型
        include: [
            path.resolve(__dirname, './node_modules/ketcher-react'),
            path.resolve(__dirname, './node_modules/ketcher-core')
        ],
        use: [
            {
                loader: require.resolve('./config/transform.js')
            }
        ]
    })
}

// 修改css主题loader
const customThemeLoader = () => {
    return addWebpackModuleRule({
        test: /\.css$/, // 匹配需要处理的文件类型
        include: [
            path.resolve(__dirname, './node_modules/ketcher-react')
        ],
        use: [
            'style-loader',
            'css-loader',
            {
                loader: require.resolve('./config/transformColor.js')
            }
        ]
    })
}

module.exports = override(translateLoader(), customThemeLoader())
