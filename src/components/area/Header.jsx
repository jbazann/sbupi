import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <div className="absolute-underlay flex-col center-children">
                <div className={styles.headerContainer}>
                    <p className={styles.p}>jbazann.dev</p>
                </div>
            </div>
        </>
    );
};