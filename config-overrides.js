const { override, addWebpackPlugin } = require('customize-cra')
const toobars = require('./config/toolbars')
const themes = require('./config/themes')
const fs = require('fs')
const path = require('path')

class ReplaceInFilePlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tap('ReplaceInFilePlugin', compilation => {
            const outputPath = compiler.options.output.path
            this.traverseDirectory(outputPath)
        })
    }

    traverseDirectory(directory) {
        const files = fs.readdirSync(directory)
        files.forEach(file => {
            const filePath = path.join(directory, file)
            const stat = fs.statSync(filePath)
            if (stat.isDirectory()) {
                this.traverseDirectory(filePath)
            } else if (file.startsWith('main.') && file.endsWith('.js')) {
                let fileContent = fs.readFileSync(filePath, 'utf-8')
                for (let i = 0; i < toobars.length; i++) {
                    const { search, replace } = toobars[i]
                    fileContent = fileContent.replaceAll(search, replace)
                }
                fs.writeFileSync(filePath, fileContent, 'utf-8')
            } else if (file.startsWith('main.') && file.endsWith('.css')) {
                let fileContent = fs.readFileSync(filePath, 'utf-8')
                for (let i = 0; i < themes.length; i++) {
                    const { search, replace } = themes[i]
                    fileContent = fileContent.replaceAll(search, replace)
                }
                fs.writeFileSync(filePath, fileContent, 'utf-8')
            }
        })
    }
}

module.exports = override(addWebpackPlugin(new ReplaceInFilePlugin()))
