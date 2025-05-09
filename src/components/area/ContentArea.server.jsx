import styles from "./ContentArea.module.css";

export default function ContentArea({header, content, footer}) {
    return <>
        <div className={styles.contentArea}>
            <header className="relative-container">
                <div className={"absolute-underlay " + styles.headerBorderContainer}>
                    <div className="hr"></div>
                </div>
                {header}
            </header>
            <main id="main-content-container" className={"relative-container flex-col center-children"}>
                <div className={"flex-col center-children " + styles.contentContainer}>
                    {content}
                </div>
            </main>
            <footer className="relative-container">
                <div className={"absolute-underlay " + styles.footerBorderContainer}>
                    <div className="hr"></div>
                </div>
                {footer}
            </footer>
        </div>
    </>
};