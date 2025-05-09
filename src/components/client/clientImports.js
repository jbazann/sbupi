// TODO learn more about bundling and imports in general to get rid of this abomination
export function get(key) {
    let Component = null
    switch(key) {
        case 'Bleh': Component = import('./IgnoranceWrapper.jsx')
            break
    }
    return Component
}