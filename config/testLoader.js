module.exports = function (source) {
    const replacedSource = source.replaceAll('Open…', '打开文件').replaceAll('Clear Canvas', '清楚画布')
    console.log('--------', source.matchAll(/Open…/ig))
    return replacedSource
}
