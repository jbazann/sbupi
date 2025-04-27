import {devLog} from "./common.js";

export function set(key, value) {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, value)
        return
    }
    devLog("Ignoring stores set call.")
}

export function get(key) {
    if (typeof window !== 'undefined')
        return window.localStorage.getItem(key)
    devLog("Ignoring stores get call.")
    return null
}

export function getDoc(key) {
    if (typeof window !== 'undefined')
        return document.documentElement.getAttribute(key)
    devLog("Ignoring stores getDoc call.")
    return null
}

export function setDoc(key, value) {
    if (typeof window !== 'undefined') {
        document.documentElement.setAttribute(key, value)
        return
    }
    devLog("Ignoring stores setDoc call.")
}

export function rmDoc(key) {
    if (typeof window !== 'undefined') {
        document.documentElement.removeAttribute(key)
        return
    }
    devLog("Ignoring stores rmDoc call.")
}

export function hasDoc(key) {
    if (typeof window !== 'undefined')
        return document.documentElement.hasAttribute(key)
    devLog("Ignoring stores hasDoc call.")
    return null
}