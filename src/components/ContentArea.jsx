import styles from "./ContentArea.module.css";

export default function ({header, content, footer}) {
    return (
        <div className={styles.contentArea}>
            <header className={`relative-container`}>
                <div className={`absolute-container ${styles.headerBorderContainer}`}>
                    <div className={`hr`}></div>
                </div>
                {header}
            </header>
            <main id="main-content-container" className={`relative-container flex-col center-children`}>
                <div className={`flex-col center-children ${styles.menuContainer}`}>
                    {content}
                </div>
            </main>
            <footer className={`relative-container`}>
                <div className={`absolute-container ${styles.footerBorderContainer}`}>
                    <div className={`hr`}></div>
                </div>
                {footer}
            </footer>
        </div>
    );
};