import styles from "./FootnoteRef.module.css";
// TODO styles

export default function FootnoteRef({children,target}) {
    return <>
        <button popoverTarget={target} popoverTargetAction="toggle"
                className={`clickableText ${styles.refButton}`}>
            <sup>{children}</sup></button>
    </>
}