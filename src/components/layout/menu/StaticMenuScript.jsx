import {useEventListener} from "@l/hooks.client.js";
import {setChecked} from "@l/utils.client.js";
import {events} from "@c/layout/menu/StaticMenu.shared.js";
import {event} from "@l/common.shared.js";

export default StaticMenuScript

function StaticMenuScript({id,onRadio,offRadio,parentOnRadio,parentOffRadio,eventTargetId = ''}) {
    useEventListener(eventTargetId,event(id,events.on),handler,{onRadio,parentOffRadio})
    useEventListener(eventTargetId,event(id,events.off),handler, {offRadio,parentOnRadio})
}

function handler(elems,_event) {
    for (const key in elems) {
        setChecked(elems[key])
    }
}