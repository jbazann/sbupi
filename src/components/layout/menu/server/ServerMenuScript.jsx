import {useServerRenderedEventListener} from "@l/hooks.client.js";
import {setChecked} from "@l/utils.client.js";
import {buttons, events} from "@c/layout/menu/base/MenuConstants.shared.js";
import {event, sid} from "@l/common.shared.js";
import {useEffect} from "react";

export default ServerMenuScript

function ServerMenuScript({id,onRadio,offRadio,parentOnRadio,parentOffRadio,eventTargetId = ''}) {
    useServerRenderedEventListener(eventTargetId,event(id,events.on),handler,{onRadio,parentOffRadio})
    useServerRenderedEventListener(eventTargetId,event(id,events.off),handler, {offRadio,parentOnRadio})
    useEffect(() => {
        document.getElementById(sid(id,buttons.on))?.removeAttribute("data-inert")
        document.getElementById(sid(id,buttons.off))?.removeAttribute("data-inert")
    }, [id]);
}

function handler(elems,_event) {
    for (const key in elems) {
        setChecked(elems[key])
    }
}