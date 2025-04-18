import styles from "./MenuContainer.module.css"

export default function MenuContainer({menu, clean = false}) {
    return <>
        <div className={clean ? styles.leafContainer : styles.intermediateContainer}>
            {menu}
        </div>
    </>


}