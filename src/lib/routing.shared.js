export {
    setRoutes,
    nav,
    pop,
    setStack,
    serialize,
    deserialize,
    validatePath,
    initStack
}

let lang = getDoc('lang') || 'en'
let nodes = new Map()

function getDoc(key) {
    if (typeof window !== 'undefined')
        return document.documentElement.getAttribute(key)
}

function setRoutes(route, to, from = 'root') {
    const edges = nodes.get(from.toLowerCase()) || new Map()
    edges.set(route.toLowerCase(), to)
    nodes.set(from, edges)
}

let stack = []
function nav(route, from = 'root') {
    let to = nodes.get(from.toLowerCase())?.get(route.toLowerCase())
    if (to && (to = document.getElementById(to))) {
        stack.push(route)
        setStack()
        return true;
    } else {
        return false;
    }
}

function pop() {
    stack.pop()
    setStack()
}

function initStack() {
    const segments = location.pathname.split('/').filter(s => s).map(s => s.toLowerCase()).reverse()
    if (segments.at(-1) === lang) segments.pop()
    let current, previous = 'root'
    while ((current = segments.pop()) &&
        nodes.get(previous)?.has(current)) {
        stack.push(current)
        previous = current
    }
    setStack()
}

/*function initNav(route, from) {
    let to = nodes.get(from)?.get(route)
    if (to && (to = document.getElementById(to))) {
        to.click()
        stack.push(route)
        return true;
    } else {
        setStack()
        return false;
    }
}*/

function setStack() {
    history.replaceState(null, "", buildPath())
}

function reset() {
    stack = []
    nodes = new Map()
}

/*function pushState() {
    history.pushState(null, "", buildPath())
}*/

function buildPath() {
    return (lang === 'en' ? '/' : `/${lang}/`) + stack.join('/')
}

function serialize() {
    const nodesObj = {}
    for (const [k, v] of nodes) {
        nodesObj[k] = Object.fromEntries(v.entries())
    }
    return {nodes: JSON.stringify(nodesObj)}
}

function deserialize(data) {
    const nodesObj = {}, transientObj = JSON.parse(data.nodes)
    for (const k in transientObj) {
        nodesObj[k] = new Map(Object.entries(transientObj[k]))
    }
    nodes = new Map(Object.entries(nodesObj))
}

function validatePath(path) {
    let validStack = []
    let redirect = path.match(/\/\/+/) !== null
    const segments = path.split('/').filter(s => s).map(s => s.toLowerCase()).reverse()

    let current, previous = 'root'
    while ((current = segments.pop()) &&
            nodes.get(previous)?.has(current)) {
        validStack.push(current)
        previous = current
    }

    return [
        '/' + validStack.join('/'),
        redirect || // path contained empty segments
        segments.length !== 0 || // some intermediate segment was invalid
        (current && !nodes.get(previous)?.has(current)) // the last segment was invalid
    ]
}