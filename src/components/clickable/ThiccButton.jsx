import styles from './ThiccButton.module.css'

export default function ThiccButton({children, id, classes, disabled = false}) {
    return <>
        <button disabled={disabled} id={id} className={`${styles.menuButton} ${classes}`}>
            {children}
        </button>
    </>
};