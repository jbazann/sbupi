import styles from './ThiccButton.module.css'

export default function ThiccButton({children, id, classes, disabled = false}) {
    console.log(disabled)
    return <>
        <button disabled={disabled} id={id} className={`${styles.menuButton} ${classes}`}>
            {children}
        </button>
    </>
};