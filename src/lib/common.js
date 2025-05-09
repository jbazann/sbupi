import {devmode} from "./environment.js";

export {
    devLog,
    devErr,
    debounce,
    throttle,
    throunce,
    ids
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
function devLog(thing, typeThing) {
    if (devmode) {
        if (typeThing) {
            console.log(Object.assign(Object.create(typeThing),thing))
        } else {
            console.log(thing)
        }
    }
}

function devErr(err) {
    if (devmode) console.error(err)
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