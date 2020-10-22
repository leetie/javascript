// import { appendToDocument } from "./script.js";

function storeObj(obj) {
    localStorage.setItem(obj.id, JSON.stringify(obj));
}

function checkStorage() {
    if (localStorage.length > 0) {
        let bookObjs = []
        for (let i = 0; i < localStorage.length; i++) {
            // appendToDocument((JSON.parse(localStorage[i])), i);
            bookObjs.push(JSON.parse(localStorage[i]));
        }
    }
    return bookObjs;
}
// export { storeObj, checkStorage };
export { storeObj, checkStorage };