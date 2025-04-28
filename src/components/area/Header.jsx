import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <div className="absolute-underlay flex-col center-children">
                <div className={styles.headerContainer}>
                    <p className={styles.p}>Disponible en español a partir del 30/04/2025</p>
                </div>
            </div>
        </>
    );
};