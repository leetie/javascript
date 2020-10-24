function storeObj(obj) {
    localStorage.setItem(obj.id, JSON.stringify(obj));
}

function checkStorage() {
    let bookObjs = []
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            bookObjs.push(JSON.parse(localStorage[localStorage.key(i)]));
            console.log(bookObjs)
        }
    }
    return bookObjs;
}
function removeFromStorage(id) {
    localStorage.removeItem(id);
}
export { storeObj, checkStorage, removeFromStorage };