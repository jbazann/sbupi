import styles from './ThiccButton.module.css'

export default function ThiccButton({children, id, classes, disabled = false, action, translationKey}) {
    let attr
    if (translationKey) attr = {
        'data-i18n-key': translationKey
    }
    return <>
        <button disabled={disabled} id={id} className={`${styles.menuButton} ${classes}`}
                {...attr}
            onClick={action}>
            {children}
        </button>
    </>
};