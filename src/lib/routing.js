let nodes = new Map()

export function setRoutes(routes, to, from = 'root') {
    const edges = nodes.get(from) || new Map()
    for (const route of routes) {
        edges.set(route, to)
    }
    nodes.set(from, edges)
}

let stack = []
let idkrenamethislater = false
export function nav(route, from = 'root') {
    let to = nodes.get(from)?.get(route)
    if (to && (to = document.getElementById(to))) {
        if (idkrenamethislater) stack.push(route)
        if (idkrenamethislater) setStack()
        // if (idkrenamethislater) pushState()
        return true;
    } else {
        return false;
    }
}

export function pop() {
    stack.pop()
    setStack()
    // pushState()
}

export function initNav(route, from) {
    let to = nodes.get(from)?.get(route)
    if (to && (to = document.getElementById(to))) {
        to.click()
        stack.push(route)
        return true;
    } else {
        setStack()
        return false;
    }
}

export function setStack() {
    idkrenamethislater = true
    history.replaceState(null, "", buildPath())
}

export function reset() {
    stack = []
    nodes = new Map()
}

export function fixmeSoon() {
    idkrenamethislater = false
}

function pushState() {
    history.pushState(null, "", buildPath())
}

function buildPath() {
    return '/' + stack.join('/')
}