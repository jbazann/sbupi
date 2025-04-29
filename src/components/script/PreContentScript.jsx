import {devErr, devLog, reset as resetCommon} from "../../lib/common.js";
import {reset as resetRouting} from "../../lib/routing.js"
import {fixmeSoon, initNav, setStack} from "../../lib/routing.js";
import {get, set, setDoc} from "../../lib/stores.js";
import {settings} from "../../lib/enum.js";
import {fixLang} from "../../lib/environment.js";

export let PostContentTaskMap = new Map()

export default function PreContentScript() {
    // Reset unmanaged state
    resetCommon()
    resetRouting()
    PostContentTaskMap = new Map()
    if (typeof window !== 'undefined') {
        // Initialize theme document data
        let val
        if ((val = get(settings.theme.key))) {
            setDoc(settings.theme.attr, val)
        }
        if ((val = get(settings.theme.variant.key))) {
            setDoc(settings.theme.variant.attr, val)
        }
        set(settings.lang.key,'es')
        if ((val = get(settings.lang.key))) {
            setDoc(settings.lang.attr, val)
            fixLang(val) // TODO fix this idiocy
        }

        // Setup location initlization task
        PostContentTaskMap.set('__routingTask__' , {
            run: (e) => {
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
        })
    }
}