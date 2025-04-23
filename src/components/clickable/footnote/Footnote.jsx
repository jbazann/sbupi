import Popover from "../../popover/Popover.jsx";
import styles from './Footnote.module.css'

export default function Footnote({children, idFn, label}) {
    return <>
        <p className={styles.p}>
            {label}: {children}
        </p>
        <Popover id={idFn('ref'+label)}>
            {children}
        </Popover>
    </>
};