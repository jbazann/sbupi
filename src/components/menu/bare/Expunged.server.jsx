import TextContainer from "../../text/TextContainer.server.jsx";
import styles from '../../text/TextContainer.module.css'
import {useContext} from "react";
import translate from "../../../lib/translation.js";
import {Lang} from "../../../lib/context.js";

export default function Expunged() {
    const lang = useContext(Lang)
    return <>
        <TextContainer>
            <h2 className={styles.h1}>
                {translate(lang, 'misc.expunged.header') || "EXPUNGED."}
            </h2>
            <p className={styles.p2}>
                {translate(lang, 'misc.expunged.desc') || "She didn't like this."}
            </p>
            <div className="hr"></div>
        </TextContainer>
    </>
};