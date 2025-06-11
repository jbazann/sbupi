import {translate} from "@l/translation.shared.js";
import {useContext} from "react";
import {Lang} from "@l/context.shared.js";
import HydrationRoot from "@c/system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import {event as e, sid} from "@l/common.shared.js"
import {buttons,events} from "@c/layout/menu/base/MenuConstants.shared.js";
import {setRoute} from "@l/routing.shared.js";
import BaseButton from "@c/layout/control/BaseButton.shared.jsx";

export default ServerMenuButton

function ServerMenuButton({id,label,labelKey,disabled=false,kind = buttons.on, forcedId,route,parentRoute = 'root'}) {
    const lang = useContext(Lang),
        event = kind === buttons.on ? events.on : events.off,
        buttonId = forcedId ?? sid(id,kind)

    route && setRoute(buttonId,route,parentRoute)

    return <>
        <BaseButton id={buttonId} disabled={disabled} role="menuitem" cue={true} >
            {translate(lang, labelKey) || label}
        </BaseButton>
        <HydrationRoot comp={placeholders.RoutingScript} data={{
            clickableId: buttonId,
            route,parentRoute
        }} /> {/* RoutingScript first to prevent system desync from clicks before the second effect runs. */}
        <HydrationRoot comp={placeholders.OnClickDispatchEventScript} data={{
            clickableId: buttonId,
            eventName: e(id,event)
        }} metadata={{name: ServerMenuButton.name}} />
    </>
}