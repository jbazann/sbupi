import styles from './ActionButton.module.css'
import HydrationRoot from "../client/HydrationRoot.server.jsx";
import {placeholders} from "../../lib/placeholders.shared.js";

export const kinds = {
    BackNav: 'BackNav',
    ForwardNav: 'ForwardNav',
    Option: 'Option',
    None: 'None'
}

export default function ActionButton({children, id, classes, disabled = false, translationKey, kind = kinds.None, data}) {
    let attr = {}
    if (translationKey) attr['data-i18n-key'] = translationKey
    return <>
        <button disabled={disabled} id={id} className={styles.actionButton + (classes ? ' ' + classes : '')}
                {...attr} >
            {children}
        </button>
        {kind === kinds.None ? null :
            <HydrationRoot comp={placeholders.ActionButtonScript}
                           data={{id,kind,data}}/>
        }
    </>
};