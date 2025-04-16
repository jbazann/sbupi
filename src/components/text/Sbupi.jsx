import TextContainer from "./TextContainer.jsx";
import styles from './TextContainer.module.css'
import {getIdCounter} from "../../lib/common.js";
import Footnote from "../footnote/Footnote.jsx";
import FootnoteRef from "../footnote/FootnoteRef.jsx";

const id = getIdCounter()

export default function Sbupi() {
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The Sbupi project</b></h2>
            <p className={styles.h2}>
                The site you are currently browsing. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                Hosted by Cloudflare Pages. Deployed
                through <a href="https://github.com/jbazann/sbupi" target="_blank">
                this</a> GitHub repository.
            </p>
            <p className={styles.p3}>
                This project was rebooted four times, so though it is listed
                as just one, it's actually the latest product of a long and methodic learning process
                <FootnoteRef idFn={id}>1</FootnoteRef>
                .
            </p>
            <p className={styles.p3}>
                The current version is built with Vite, it leverages Vike to scaffold the annoying parts
                of integrating React, but the code actively avoids letting
                the framework handle state (where viable)
                <FootnoteRef idFn={id}>2</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p1}>
                Features:
            </p>
            <ol>
                <li>
                    Custom e-mail addresses such as mail@jbazann.dev, without using nor implementing
                    an actual mailing service
                    <FootnoteRef idFn={id}>3</FootnoteRef>
                    .
                    <ol>
                        <li>
                            Cloudflare re-routes incoming messages to <em><i>jbazanndev@gmail.com</i></em>,
                        </li>
                        <li>
                            Google's SMTP service allows outgoing messages under the <em><i>jbazann.dev</i></em> domain.
                        </li>
                    </ol>
                </li>
                <li>
                    Integration with <a href="https://thecatapi.com">
                    TheCatAPI</a>, and <a href="https://www.cloudflare.com/developer-platform/products/r2/">
                    Cloudflare R2
                </a>.
                    <ol>
                        <li>
                            Navigating to <a href="https://jbazann.dev/cat">
                            jbazann.dev/cat</a> triggers a request to a
                            worker at <a href="https://jbazann.dev/w/cats">
                            jbazann.dev/w/cats</a>
                        </li>
                        <li>
                            The worker checks the limits (stored in R2) of its API key,
                            and when possible, scrapes cat images into the bucket
                            <FootnoteRef idFn={id}>4</FootnoteRef>
                            .
                        </li>
                        <li>
                            Regardless of the scarping step results, the worker responds
                            with a list of base 64 URLs from the object storage,
                        </li>
                    </ol>
                </li>
                <li>
                    And more!
                    <ol>
                        <li>
                            I prefer doing backend work, I want to go do that now.
                        </li>
                        <li>
                            So I will list the other stuff another day&trade;.
                        </li>
                    </ol>
                </li>
            </ol>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                References:
            </p>
            <Footnote idFn={id} label="1">
                The previous versions are unavailable, as they do not represent my current
                knowledge and expertise. They were built using different
                approaches, with TailwindCSS v3 and v4, and at some point Alpinejs.
                Feel free to ask about them when you interview me for an awesome big money job.
            </Footnote>
            <Footnote idFn={id} label="2">
                This deviates from React's principles in order
                to develop a deeper understanding of the benefits and
                drawbacks of programmatic rendering, and all the ways
                a more vanilla approach can be more advantageous.
                I also enjoy doing things my own away and learning from the consequences.
            </Footnote>
            <Footnote idFn={id} label="3">
                Though it doesn't replace the reliability of a dedicated
                and complete service, it is a simple and free alternative
                that integrates both platforms smoothly.
                It also minimizes technical overhead while still looking cool
                in a resume.
            </Footnote>
            <Footnote idFn={id} label="4">
                The amount per execution is limited by Cloudflare Workers' free plan runtime
                and sub-request limits. The actual workflow consists of dispatching
                requests asynchronously, then immediately responding with randomly
                selected images from the bucket. Then, the worker encondes and stores
                as many images as possible,
                before the CPU-time limit forces its termination.
            </Footnote>
        </TextContainer>
    </>
};