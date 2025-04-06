// TODO come up with better name for these hehe
export const onBtn = 'on_button'
export const offBtn = 'off_button'
export const onState = 'on_state'
export const offState =  'off_state'
export const noneState = 'none_state'
export const containerState = 'container_state'
export const parentContainerState = 'parent_container_state'


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
