import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <div className="absolute-underlay flex-col center-children" role="presentation">
                <div className={styles.headerContainer} role="presentation">
                    <p className={styles.p}>jbazann.dev</p>
                </div>
            </div>
        </>
    );
};