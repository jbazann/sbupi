import BaseButton from "@c/layout/control/BaseButton.shared.jsx";
import styles from "./InfoPopoverTrigger.module.css"

export default InfoPopoverTrigger

function InfoPopoverTrigger({popover}) {
    return <>
        <BaseButton popoverTarget={popover}
                    children={'i'} classes={styles.overrides} />
        {/* TODO fix menuitem role*/}
    </>
}