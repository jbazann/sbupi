import {translate} from "@l/translation.shared.js";
import {lang} from "@l/environment.shared.js";
import {devLog, event as e, loggedEvent, sid} from "@l/common.shared.js"
import {buttons, events, radios} from "@c/layout/menu/base/MenuConstants.shared.js";
import BaseButton from "@c/layout/control/BaseButton.shared.jsx";

export default ClientMenuButton

export {
    getBridgeRadioRef
}

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

function getBridgeRadioRef(parentId) {
    const current = {
        onRadio: {
            current: document.getElementById(sid(parentId,radios.on))
        },
        offRadio: {
            current: document.getElementById(sid(parentId,radios.off))
        }
    }
    devLog(current, "CLIENT MENU — PARENT RADIOS")
    return current
}