import {useClickHandler} from "@l/hooks.client.js";
import {key} from "@l/utils.client.js";
import {devLog, loggedEvent} from "@l/common.shared.js";

export default OnClickDispatchEventScript

function OnClickDispatchEventScript({clickableId,eventName,eventTargetId = ''}) {
    devLog({clickableId,eventName}, 'EVENT DISPATCH SCRIPT')
    useClickHandler(clickableId, (elems,_event) => {
        const target = elems[key(eventTargetId)] || window
        loggedEvent(target,new CustomEvent(eventName))
    }, {eventTargetId})
}