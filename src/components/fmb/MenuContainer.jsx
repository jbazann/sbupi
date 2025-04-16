import styles from "./MenuContainer.module.css"
import {getIdFn} from "./StaticMenuButton.jsx";


export default function MenuContainer({menu, id, clean = false}) {
    const idFn = getIdFn(id)

    return (
        <div className={clean ? "relative-container" : `flex-col center-children auto-scroll-y ${styles.container}`}>
            {menu}
        </div>
    )
}