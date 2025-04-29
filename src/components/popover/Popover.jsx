import styles from './Popover.module.css'

export default function Popover({children,id, translationKey}) {
    return <>
        <div id={id} popover="auto" className={`${styles.popoverContainer}`}>
            <div className={`${styles.popoverFlexContainer}`}>
                <div className={`${styles.popoverBox}`}>
                    <div className={styles.popoverContent}>
                        <p data-i18n-key={translationKey}>
                            {children}
                        </p>
                    </div>
                    <button popoverTarget={id} popoverTargetAction="hide" className={styles.popoverButton}>
                        <img src="/icon/favicon.png" alt="Click to dismiss dialog."
                             className={styles.popoverIcon}/>
                    </button>
                </div>
            </div>
        </div>
    </>
};