const languages = require('./i18n.js')

module.exports = function (source) {
    // inject jbyKetcher 便于顶部按钮配置自定义&获取ketcher-react包中redux数据
    source = source.replaceAll('store.dispatch(initResize());', `store.dispatch(initResize());
  window.jbyKetcher={
    store,
    load,
    getFormatMimeTypeByFileName
  };`)
    // 转换
    languages.forEach(({ search, replace }) => {
        source = source.replaceAll(search, replace)
    })
    return source
}
