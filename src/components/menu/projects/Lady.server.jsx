import TextContainer from "../../text/TextContainer.server.jsx";
import styles from '../../text/TextContainer.module.css'
import Footnote from "../../clickable/footnote/Footnote.server.jsx";
import FootnoteRef from "../../clickable/footnote/FootnoteRef.server.jsx";
import {ids} from "../../../lib/common.js";

export default function Lady() {
    const [
        ref1
    ] = ids(1)
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The PostLady project</b>
                <FootnoteRef target={ref1}>1</FootnoteRef>
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
            <Footnote id={ref1} label='1'>
                I promise will change the project name to something that isn't likely to get
                me sued if I ever release this.
            </Footnote>
            <p>2: <a href="/w/t/f" target="_blank">??????</a></p>
        </TextContainer>
    </>
};