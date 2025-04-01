function getApi(url) {
    return fetch(url, {
        method: "GET",
        mode: 'no-cors'
    }).then(T => T.json())
}

module.exports = {getApi}