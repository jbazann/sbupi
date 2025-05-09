import TextContainer from "../../text/TextContainer.server.jsx";
import styles from '../../text/TextContainer.module.css'
import translate from "../../../lib/translation.js";
import {useContext} from "react";
import {Lang} from "../../../lib/context.js";

export default function Soon() {
    const lang = useContext(Lang)
    return <>
        <TextContainer>
            <h2 className={styles.h1}>
                {translate(lang,'misc.soon.header') || "Coming Soon!"}
            </h2>
            <p className={styles.p2}>
                {translate(lang,'misc.soon.desc') || "This feature is almost ready."}
            </p>
            <div className="hr"></div>
        </TextContainer>
    </>
};