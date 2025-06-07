import styles from './Popover.module.css'
import {useContext} from "react";
import {Lang} from "@l/context.shared.js";
import {translate} from "@l/translation.shared.js";

export default function Popover({children,id}) {
    const lang = useContext(Lang)
    return <>
        <div id={id} popover="auto" className={`${styles.popoverContainer}`}>
            <div className={`${styles.popoverFlexContainer}`}>
                <div className={`${styles.popoverBox}`}>
                    <div className={styles.popoverContent}>
                        <p>
                            {children}
                        </p>
                    </div>
                    <button popoverTarget={id} popoverTargetAction="hide" className={styles.popoverButton}>
                        <img src="/icon/favicon.png"
                             alt={translate(lang,'misc.popover.dismiss') || "Click to dismiss dialog."}
                             className={styles.popoverIcon}/>
                    </button>
                </div>
            </div>
        </div>
    </>
};