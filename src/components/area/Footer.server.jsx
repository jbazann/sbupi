import styles from './Footer.module.css'

export default function FooterServer() {
    return (
        <div className={"relative-container flex-col " + styles.footingContainer}>
            <p className={"center-self " + styles.footingText}>
                contact: mail@jbazann.dev
            </p> {/* TODO overflow, dynamic fetch, etc etc etc*/}
        </div>
    );
};