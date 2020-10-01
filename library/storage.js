import { appendToDocument } from "./script.js";

function storeObj(obj, index) {
    localStorage.setItem(index, JSON.stringify(obj));
}

function checkStorage() {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            appendToDocument((JSON.parse(localStorage[i])), i);
          }
    }
}
export { storeObj, checkStorage };