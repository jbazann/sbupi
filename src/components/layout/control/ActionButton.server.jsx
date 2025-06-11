import HydrationRoot from "@c/system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import BaseButton from "@c/layout/control/BaseButton.shared.jsx";

export const kinds = {
    BackNav: 'BackNav',
    ForwardNav: 'ForwardNav',
    Option: 'Option',
    None: 'None',
    Cookie: 'Cookie',
    Refresh: 'Refresh',
    Attribute: 'Attribute'
}

export default function ActionButton({children, id, classes, disabled = false, kind = kinds.None, data = {}}) {
    return <>
        <BaseButton id={id} classes={classes} disabled={disabled} cue={true} >
            {children}
        </BaseButton>
        <HydrationRoot comp={placeholders.ActionButtonScript}
                       metadata={ActionButton.name}
                       data={{id,kind,data}}/>
    </>
};