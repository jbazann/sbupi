import styles from "./FootnoteRef.module.css";
// TODO styles

export default function FootnoteRef({children,idFn}) {
    return <>
        <button popoverTarget={idFn('ref'+children)} popoverTargetAction="toggle"
                className={`clickableText ${styles.refButton}`}>
            <sup>{children}</sup></button>
    </>
}