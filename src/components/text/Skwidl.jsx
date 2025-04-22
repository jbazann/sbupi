import TextContainer from "./TextContainer.jsx";
import styles from './TextContainer.module.css'
import {getIdCounter} from "../../lib/common.js";

const id = getIdCounter()

export default function Skwidl() {
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The Skwidl project</b></h2>
            <p className={styles.h2}>
                A microservices proof-of-concept. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                More details to come after 24/04/2025. A slightly outdated
                description can be found at <a href="https://v2.jbazann.dev">v2.jbazann.dev</a>. <br/>
                The code is publicly available in <a href="https://github.com/jbazann/skwidl" target="_blank">
                this</a> GitHub repository.
            </p>
            <p className={styles.p3}>
                A first release is almost done. I only need to test
                async communication through the message queue and
                concurrency control, and update the
                Nextjs UI server.
            </p>
            <p className={styles.p3}>
                I will not repeat the mistake of setting a date for this.
            </p>
        </TextContainer>
    </>
};