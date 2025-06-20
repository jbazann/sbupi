import {devmode} from "./environment.shared.js";

export {
    devLog,
    devErr,
    loggedEvent,
    debounce,
    throttle,
    throunce,
    ids,
    sid,
    sids,
    event
}

function event(id, kind) {
    return sid(id,'e'+kind)
}

function sids(id, subIds) {
    return subIds.map(s => sid(id,s))
}

function sid(id, subId) {
    return id + 's' + subId
}

let idCounter = 0
function ids(amount, scope) {
    const arr = new Array(amount)
    for (let i = 0; i < arr.length; i++) {
        // why is there no built-in way to fill an array with a supplier is JavaScript even a language
        arr[i] = scope ? scopedId(scope,idCounter++) : id(idCounter++)
    }
    return arr
}

function scopedId(scope, id) {
    return scope + 'i' + id
}

function id(id) {
    return 'i' + id
}

// Let the wind lead the sail, let disorder create order.
function devLog(thing, label) {
    devmode && (label && !console.log(label, thing) || console.log(thing))
}

function devErr(err) {
    devmode && console.error(err)
}

function loggedEvent(target, event) {
    devLog({target,event}, 'LOGGED EVENT')
    target.dispatchEvent(event)
}

function debounce(f, tms, that) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => f.apply(that || this, args), tms)
    }
}

function throttle(f, tms, that) {
    let timer
    return (...args) => {
        if (!timer) {
            timer = setTimeout(() => {
                timer = false
                return f.apply(that || this, args)
            }, tms)
        }
    }
}

function throunce(f, ttms, tdms = ttms, that) {
    const t = throttle(f, ttms, that)
    const d = debounce(f, tdms, that)
    return (args) => {
        t(args)
        d(args)
    }
}