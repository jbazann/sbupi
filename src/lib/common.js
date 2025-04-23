import {devmode} from "./environment.js";

let scopeCounter = 0, scopes = new Map()

/**
 * Provides ID generators that are guaranteed to provide unique IDs on every call
 * without parameters, and always the same ID for a given key, when one is provided
 * as the only parameter.
 * @param scope An ID namespace. Must be a valid HTML5 ID string.
 * A unique scope is automatically generated if omitted.
 * @returns A function with an ID map in its closure. The same function entity is returned
 * by all calls with the same scope (therefore containing all the mappings created by
 * previously returned instances). If called with a key argument, the function returns the same
 * ID for all subsequent calls with said ID.
 */
export function getIdScope(scope = scopeCounter++) {
    return scopes.get(scope) ||
        scopes.set(scope, createIdFunctionForScope(scope)).get(scope)
}

const globalId = getIdScope()
export function getGlobalId(key) {
    return globalId(key)
}

function createIdFunctionForScope(scope) {
    let idCounter = 0, keyMap = new Map()
    return (key) => key ? (keyMap.get(key) ||
        keyMap.set(key, identifier(scope, idCounter++)).get(key)) :
        identifier(scope, idCounter++)
}

function identifier(scope, id) {
    return 's' + scope + 'i' + id
}


// Let the wind lead the sail, let disorder create order.
export function devLog(thing, typeThing) {
    if (devmode) {
        if (typeThing) {
            console.log(Object.assign(Object.create(typeThing),thing))
        } else {
            console.log(thing)
        }
    }
}

export function devErr(err) {
    if (devmode) console.error(err)
}

export function debounce(f, tms, that) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => f.apply(that || this, args), tms)
    }
}

export function throttle(f, tms, that) {
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

export function throunce(f, ttms, tdms = ttms, that) {
    const t = throttle(f, ttms, that)
    const d = debounce(f, tdms, that)
    return (args) => {
        t(args)
        d(args)
    }
}