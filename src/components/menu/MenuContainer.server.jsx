import styles from "./MenuContainer.module.css"

export default function MenuContainer({children, clean = false}) {
    return <>
        <div className={clean ? styles.bareContainer : styles.scrollableContainer}>
            {children}
        </div>
    </>


}