import styles from "./FastMenuButtonContainer.module.css"
import {containerState} from "../../lib/common.js";

export default function FastMenuButtonContainer({buttons, id}) {
    const idFn = (str) => id + '_' + str;

    return (
        <div className={`flex-col center-children auto-scroll-y ${styles.container}`}>
            <input type="checkbox" id={idFn(containerState)} className={`hidden ${styles.hideCheck}`} />
            {buttons}
        </div>
    )
}