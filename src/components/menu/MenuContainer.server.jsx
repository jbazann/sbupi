import styles from "./MenuContainer.module.css"
import {useContext} from "react";
import {MenuContext} from "@l/context.shared.js";

export default function MenuContainer({children, clean = false}) {
    const context = useContext(MenuContext)
    return <>
        <div className={clean ? styles.bareContainer : styles.scrollableContainer}
             role="menu" aria-owns={context.offBtn ?? ''} >
            {children}
        </div>
    </>


}