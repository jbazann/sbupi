import styles from './ThiccButton.module.css'

export default function ThiccButton({children, id, classes, disabled = false, action}) {
    return <>
        <button disabled={disabled} id={id} className={`${styles.menuButton} ${classes}`}
            onClick={action}>
            {children}
        </button>
    </>
};