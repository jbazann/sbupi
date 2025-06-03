import styles from "./StaticMenuButton.module.css";
import {translate} from "@l/translation.server.js";
import {useContext} from "react";
import {Lang} from "@l/context.shared.js";
import HydrationRoot from "@c/system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import {event as e, sid} from "@l/common.shared.js"
import {buttons,events} from "@c/layout/menu/StaticMenu.shared.js";

export default StaticMenuButton

function StaticMenuButton({id,label,labelKey,disabled=false,kind = buttons.on, forcedId}) {
    const lang = useContext(Lang),
        event = kind === buttons.on ? events.on : events.off,
        buttonId = forcedId ?? sid(id,kind)

    return <>
        <button disabled={disabled} id={buttonId} role="menuitem"
                className={styles.actionButton} >
            {translate(lang, labelKey) || label}
        </button>
        <HydrationRoot comp={placeholders.OnClickDispatchEventScript} data={{
            clickableId: buttonId,
            eventName: e(id,event)
        }} metadata={{name: StaticMenuButton.name}} />
    </>
}