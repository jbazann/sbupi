import {devLog} from "./common.js";

const nodes = new Map()

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
    devLog({
        route,from,nodes,stack,idkrenamethislater
    }, class PreNav{}.prototype)
    let to = nodes.get(from)?.get(route)
    if (to && (to = document.getElementById(to))) {
        if (idkrenamethislater) stack.push(route)
        if (idkrenamethislater) setStack()
        // if (idkrenamethislater) pushState()
        devLog({
            stack,idkrenamethislater
        }, class Nav{}.prototype)
        return true;
    } else {
        devLog({
            key: nodes.get(from)?.get(route),
            to,
            route,
            from,
            stack,
            nodes
        }, class NavError{}.prototype)
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
    devLog({route,from,nodes,stack,idkrenamethislater,to}, class PreInitNav{}.prototype)
    if (to && (to = document.getElementById(to))) {
        to.click()
        stack.push(route)
        devLog({stack,idkrenamethislater,to}, class InitNav{}.prototype)
        return true;
    } else {
        setStack()
        return false;
    }
}

export function setStack() {
    idkrenamethislater = true
    devLog({stack}, class SetStack{}.prototype)
    history.replaceState(null, "", buildPath())
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