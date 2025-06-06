import {useEffect, useRef} from "react";
import {nav, pop, setRoute} from "@l/routing.shared.js";
import {devErr, devLog} from "@l/common.shared.js";

export {
    useClickHandler,
    useServerRenderedEventListener,
    useEventListener,
    useRoutingHandler,
    useRefs
}

function useRefs(amount,val) {
    const refs = []
    for (let i = 0; i < amount; i++) {
        refs.push(useRef(val))
    }
    return refs
}

function useEventListener(event, handler, target = window) {
    devLog({target,event}, 'CSR EVENT HANDLER ATTACHED')

    useEffect(() => {
        const handlerWrapper = (e) => {
            devLog({target,event}, 'EVENT')
            handler(e)
        }
        target?.addEventListener(event, handlerWrapper)
        return () => target?.removeEventListener(event, handlerWrapper)
    })
}

function useServerRenderedEventListener(targetId, event, handler, elementIds = {}) {
    useEffect(() => {
        const elems = getElements(elementIds)
        const target = targetId ? document.getElementById(targetId) : window
        const handlerWrapper = (e) => {
            devLog({targetId,elems,event}, 'EVENT')
            handler(elems,e)
        }

        devLog({target,targetId,event,elementIds}, 'EVENT HANDLER ATTACHED')

        target?.addEventListener(event, handlerWrapper)
        return () => target?.removeEventListener(event, handlerWrapper)
    }, [targetId, ...Object.values(elementIds)]) // TODO check if deconstructing is enough to prevent bad re-renders.
}

function useClickHandler(targetId,handler,elementIds = {}) {
    useEffect(() => {
        const elems = getElements(elementIds)
        const target = document.getElementById(targetId)
        const handlerWrapper = (e) => {
            devLog({targetId,elems}, 'CLICK')
            handler(elems,e)
        }

        devLog({target,targetId,elementIds}, 'CLICK HANDLER ATTACHED')

        target?.addEventListener('click', handlerWrapper)
        return () => target?.removeEventListener('click', handlerWrapper)
    }, [targetId, ...Object.values(elementIds)]) // TODO check if deconstructing is enough to prevent bad re-renders.
}

function getElements(ids) {
    const elems = {}
    if (typeof ids === 'object') {
        for (const entry of Object.entries(ids)) {
            elems[entry[0]] = document.getElementById(entry[1])
        }
    }
    return elems
}

function useRoutingHandler(buttonId, route, routeDepth) {
    const handler = route ? // forward navigation
        (e) => nav(route,routeDepth) : // backward navigation
        (e) => pop()

    useEffect(() => {
        setRoute(route,buttonId,routeDepth)
        const button = document.getElementById(buttonId)

        !button && devErr({route, buttonId, error: 'ELEMENT NOT FOUND'})

        button?.addEventListener('click', handler)

        return () => {
            button?.removeEventListener('click', handler)
        }
    })
}