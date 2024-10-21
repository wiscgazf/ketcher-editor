module.exports = function (source) {
    const colors = [
        { search: '#167782', replace: '#0a93fc' },
        { search: '#188794', replace: '#0a93fc' },
        { search: '#00838f', replace: '#0a93fc' },
        { search: '#4fb3bf', replace: '#279ffc' },
        { search: '#43b5c0', replace: '#279ffc' },
        { search: '#005662', replace: '#028ffb' }
    ]
    colors.forEach(({ search, replace }) => {
        source = source.replaceAll(search, replace)
    })
    return source
}
