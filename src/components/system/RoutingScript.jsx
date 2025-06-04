import {useClickHandler} from "@l/hooks.client.js";
import {nav, pop} from "@l/routing.shared.js";
import {devLog} from "@l/common.shared.js";

export default RoutingScript

function RoutingScript({clickableId,route,parentRoute}) {
    devLog({clickableId,route,parentRoute},'ROUTING SCRIPT')
    useClickHandler(clickableId, (elems,_event) => {
        devLog({route}, "ROUTING CLICK")
        route ? nav(route,parentRoute) : pop()
    })
}