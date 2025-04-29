import Popover from "../../popover/Popover.jsx";
import styles from './Footnote.module.css'

export default function Footnote({children, id, label, translationKey}) {
    return <>
        <p className={styles.p}>
            {label}: {children}
        </p>
        <Popover id={id} translationKey={translationKey}>
            {children}
        </Popover>
    </>
};