import styles from './Cookies.module.css'

export default function Cookies() {
    return <>
        <div className={styles.container}>
            <p className={styles.p}>
                Sorry, cookies are mandatory.
            </p>
            <div className={styles.imgContainerContainer}>
                <div className={styles.imgContainer}>
                    <img id="cookiesimg" src="/img/ab636bbb4ce81f27f57293fc7c0a32da.jpg"
                         alt=""/>
                </div>
            </div>
        </div>
    </>
};