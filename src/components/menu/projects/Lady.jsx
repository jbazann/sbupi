import TextContainer from "../../text/TextContainer.jsx";
import styles from '../../text/TextContainer.module.css'
import {getScopedId} from "../../../lib/common.js";
import Footnote from "../../clickable/footnote/Footnote.jsx";
import FootnoteRef from "../../clickable/footnote/FootnoteRef.jsx";

export default function Lady({scope}) {
    const id = getScopedId(scope);
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The PostLady project</b>
                <FootnoteRef target={id('1')}>1</FootnoteRef>
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
            <Footnote id={id('1')} label='1'>
                I promise will change the project name to something that isn't likely to get
                me sued if I ever release this.
            </Footnote>
            <p>2: <a href="/w/t/f" target="_blank">??????</a></p>
        </TextContainer>
    </>
};