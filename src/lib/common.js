import {devmode} from "./environment.js";

// TODO come up with abstractions that make these id generators actually understandable

let scopes = new Map()
let globalId = getScopedId('g')
let globalKeys = new Set(['g'])

export function reset() {
    scopes = new Map()
    globalId = getScopedId('g')
    globalKeys = new Set(['g'])
}

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
export function getScopedId(scope) {
    if (!scope) devErr("getScopedId was called without a scope: " + scope)
    return scopes.get(scope) ||
        scopes.set(scope, createIdFunctionForScope(scope)).get(scope)
}

export function getGlobalId(key) {
    if (!key) devErr("getGlobalId was called without a key.")
    if (globalKeys.has(key)) {
        devErr(`Key collision at ${key}`)
    } else {
        globalKeys.add(key)
    }
    return globalId(key)
}

function createIdFunctionForScope(scope) {
    let idCounter = 0, keyMap = new Map()
    return (key) => {
        return key ? (keyMap.get(key) ||
                keyMap.set(key, identifier(scope, idCounter++)).get(key)) :
            identifier(scope, idCounter++)
    }
}

export function identifier(scope, id) {
    return scope + 'i' + id
}

export function noop() {}

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