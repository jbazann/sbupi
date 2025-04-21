import {useEffect} from "react";
import {fixmeSoon, initNav, setStack} from "../../lib/routing.js";
import {devLog} from "../../lib/common.js";

export default function RoutingScript() {
    useEffect(() => {
        const handler = (e) => {
            fixmeSoon()
            const segments = window.location.pathname
                .split('/')
                .filter(s => s)
                .reverse()
            devLog(segments, class PathSegments{}.prototype)
            let current, last = 'root'
            while (segments.length > 0 &&
                initNav(current = segments.pop(), last)) {
                last = current
            }
            devLog(segments, class LostSegments{}.prototype)
            if (segments.length === 0) setStack()
        }
        // addEventListener('popstate', handler)
        handler()
        // return () => {
        //     removeEventListener('popstate', handler)
        // }
    });
}