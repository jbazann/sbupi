import styles from "./ContentArea.module.css";

export default function ContentArea({header, content, footer}) {
    return <>
        <div className={styles.contentArea} role="presentation">
            <header className="relative-container">
                <div className={"absolute-underlay " + styles.headerBorderContainer}
                     role="presentation">
                    <div className="hr" role="presentation"></div>
                </div>
                {header}
            </header>
            <main id="main-content-container" className={"relative-container flex-col center-children"}>
                <div className={"flex-col center-children " + styles.contentContainer}
                     role="presentation">
                    {content}
                </div>
            </main>
            <footer className="relative-container" >
                <div className={"absolute-underlay " + styles.footerBorderContainer}
                     role="presentation">
                    <div className="hr" role="presentation"></div>
                </div>
                {footer}
            </footer>
        </div>
    </>
};