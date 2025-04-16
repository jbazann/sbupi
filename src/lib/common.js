// TODO come up with better name for these hehe
export const
    onBtn = 'on_button',
    offBtn = 'off_button',
    onState = 'on_state',
    offState =  'off_state',
    noneState = 'none_state',
    containerState = 'container_state',
    parentContainerState = 'parent_container_state'

let previousIds = new Map()
let idCounter = 0
export function id(key = '', scope = idCounter++) {
    return key ?
        (previousIds.has(key) ?
            previousIds :
            previousIds.set(key,_identifier(scope))).get(key) :
        _identifier(scope)
}

function _identifier(scope) {
    return 'i' + scope + '_jssucks'
}

let scopeCounter = 0
let scopes = new Map()
export function getIdCounter(scope = scopeCounter++) {
    return (scopes.has(scope) ?
        scopes :
        scopes.set(scope, getIdFunctionForScope(scope)))
            .get(scope)
}

function getIdFunctionForScope(scope) {
    let keyMap = new Map()
    let idCounter = 0
    return (key) => {
        if (key) {
            if ( !keyMap.has(key) ) keyMap.set(key, _identifier(scope + '_' + idCounter++))
            return keyMap.get(key)
        }
        return _identifier(scope + '_' + idCounter++)
    }
}