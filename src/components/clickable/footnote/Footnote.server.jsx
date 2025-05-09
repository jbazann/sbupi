import Popover from "../../popover/Popover.server.jsx";
import styles from './Footnote.module.css'

export default function Footnote({children, id, label}) {
    return <>
        <p className={styles.p}>
            {label}: {children}
        </p>
        <Popover id={id} >
            {children}
        </Popover>
    </>
};