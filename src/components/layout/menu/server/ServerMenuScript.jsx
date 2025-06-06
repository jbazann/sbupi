import {useServerRenderedEventListener} from "@l/hooks.client.js";
import {setChecked} from "@l/utils.client.js";
import {events} from "@c/layout/menu/base/MenuConstants.shared.js";
import {event} from "@l/common.shared.js";

export default ServerMenuScript

function ServerMenuScript({id,onRadio,offRadio,parentOnRadio,parentOffRadio,eventTargetId = ''}) {
    useServerRenderedEventListener(eventTargetId,event(id,events.on),handler,{onRadio,parentOffRadio})
    useServerRenderedEventListener(eventTargetId,event(id,events.off),handler, {offRadio,parentOnRadio})
}

function handler(elems,_event) {
    for (const key in elems) {
        setChecked(elems[key])
    }
}