
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
export function getIdCounter(scope = scopeCounter++) {
    return scopes.get(scope) ||
        scopes.set(scope, createIdFunctionForScope(scope)).get(scope)
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