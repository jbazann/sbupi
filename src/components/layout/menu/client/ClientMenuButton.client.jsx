import {translate} from "@l/translation.server.js";
import {lang} from "@l/environment.shared.js";
import {event as e, loggedEvent, sid} from "@l/common.shared.js"
import {buttons,events} from "@c/layout/menu/base/MenuConstants.shared.js";
import BaseButton from "@c/layout/control/BaseButton.shared.jsx";

export default ClientMenuButton

function ClientMenuButton({
                              id,
                              ref,
                              label,
                              labelKey,
                              disabled=false,
                              kind = buttons.on,
                              forcedId,
                              eventTarget = window
}) {
    const event = kind === buttons.on ? events.on : events.off,
        buttonId = forcedId ?? sid(id,kind)

    return <>
        <BaseButton id={buttonId} disabled={disabled} role="menuitem"
                    ref={ref} onClick={(_e) => {
                        loggedEvent(eventTarget,new CustomEvent(e(id,event)))
                    }} >
            {translate(lang, labelKey) || label}
        </BaseButton>
    </>
}