import styles from './Cookies.module.css'
import translate from "../../../lib/translation.js";
import {useContext} from "react";
import {Lang} from "../../../lib/context.js";

export default function Cookies() {
    const lang = useContext(Lang)
    return <>
        <div className={styles.container}>
            <p className={styles.p}>
                {translate(lang,'cookies.desc') || "Sorry, cookies are mandatory."}
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