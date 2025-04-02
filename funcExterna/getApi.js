async function getApi(url) {
    return await fetch(url, {
        method: "GET",
        mode: 'no-cors'
    }).then(T => T.json())
}

module.exports = {getApi}