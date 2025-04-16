import styles from './Popover.module.css'

export default function Popover({children,id}) {
    return <>
        <div id={id} popover="auto" className={`${styles.popoverContainer}`}>
            <div className={`${styles.popoverFlexContainer}`}>
                <div className={`${styles.popoverBox}`}>
                    <div className={styles.popoverContent}>
                        <p>
                            {children}
                        </p>
                    </div>
                    <button popoverTarget={id} popoverTargetAction="hide" className={styles.popoverButton}>
                        <img src="/icon/favicon.png" alt="Thumbs up. Click to dismiss dialog."
                             className={styles.popoverIcon}/>
                    </button>
                </div>
            </div>
        </div>
    </>
};