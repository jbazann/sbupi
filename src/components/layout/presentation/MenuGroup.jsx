import styles from './MenuGroup.module.css'

export default MenuGroup

function MenuGroup({children, label, header}) {
    return <>
        <div  role="presentation"  className={styles.group}>
            {label ?
                <p className={styles.label}>{label}</p> :
                <div className={styles.header}>{header}</div>
            }
        </div>
        <div role="presentation" className={styles.content}>
            {children}
        </div>
    </>
}