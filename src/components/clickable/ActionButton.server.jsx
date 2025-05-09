import styles from './ActionButton.module.css'
import HydrationRoot from "../client/HydrationRoot.server.jsx";
import {placeholders} from "../../lib/placeholders.shared.js";

export const kinds = {
    BackNav: 'BackNav',
    ForwardNav: 'ForwardNav',
    Option: 'Option',
    None: 'None'
}

export default function ActionButton({children, id, classes, disabled = false, kind = kinds.None, data}) {
    return <>
        <button disabled={disabled} id={id}
                className={styles.actionButton + (classes ? ' ' + classes : '')} >
            {children}
        </button>
        {kind === kinds.None ? null :
            <HydrationRoot comp={placeholders.ActionButtonScript}
                           data={{id,kind,data}}/>
        }
    </>
};