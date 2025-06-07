import TextContainer from "@c/layout/text/TextContainer.shared.jsx";
import styles from '@c/layout/text/TextContainer.module.css'
import {translate} from "@l/translation.shared.js";
import {useContext} from "react";
import {Lang} from "@l/context.shared.js";

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