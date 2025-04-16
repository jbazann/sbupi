import TextContainer from "./TextContainer.jsx";
import styles from './TextContainer.module.css'
import {getIdCounter} from "../../lib/common.js";
import Footnote from "../footnote/Footnote.jsx";
import FootnoteRef from "../footnote/FootnoteRef.jsx";

const id = getIdCounter()

export default function Lady() {
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The PostLady project</b>
                <FootnoteRef idFn={id}>1</FootnoteRef>
            </h2>
            <p className={styles.h2}>
                A Postman alternative that doesn't use Javascript in the backend.<br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                I just started this one! Give me until mid 2025 to have
                something interesting to share about it.
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                References:
            </p>
            <Footnote idFn={id} label='1'>
                I promise will change the project name to something that isn't likely to get
                me sued if I ever release this.
            </Footnote>
            <p>2: <a href="/w/t/f" target="_blank">??????</a></p>
        </TextContainer>
    </>
};