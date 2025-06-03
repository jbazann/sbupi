import {devLog} from "@l/common.shared.js";

export {
    key,
    setChecked
}

function key(o) {
    return Object.keys(o)[0]
}

function setChecked(element, checked = true) {
    devLog({element, checked}, 'SET CHECKED')
    element && (element.checked = checked)
}