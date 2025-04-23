import TextContainer from "../../text/TextContainer.jsx";
import styles from '../../text/TextContainer.module.css';
import {getIdScope} from "../../../lib/common.js";
import FootnoteRef from "../../clickable/footnote/FootnoteRef.jsx";
import Footnote from "../../clickable/footnote/Footnote.jsx";

const id = getIdScope()

export default function Developer() {
    return <>
        <TextContainer>
            <h2 className={styles.h1}>Joaquín Bazán</h2>
            <p className={styles.h2}>
                Backend developer. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                The developer is an Information System's Engineering
                <FootnoteRef idFn={id}>1</FootnoteRef> student rounding
                up the last few courses of the degree. Over the last
                two years he as diverted his attention from academia
                to specialize in backend development
                <FootnoteRef idFn={id}>2</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p3}>
                He is currently living in Santa Fe, Argentina, but will
                eventually move to  &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;, Argentina
                to start &#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                &#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                <FootnoteRef idFn={id}>3</FootnoteRef>
                .
                During his time there,
                he will create the machine
                <span className={styles.p4}>st#p me</span>,
                who will eventually become
                &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;, &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;.
                Soon after, she will &#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;
                &#x2588;&#x2588;&#x2588;&#x2588;&#x2588; the anomaly
            <FootnoteRef idFn={id}>3712</FootnoteRef>. <br/>
            </p>
            <p className={styles.p3}>
                He is a goal-oriented and highly independent problem solver,
                who would be equally happy programming control systems for
                spaceships, helping someone's grandmother find the start menu,
                or unclogging a toilet; to him, everything is about problems and
                solutions. <br/>
            </p>
            <p className={styles.p3}>
                He is also a perfectionist who craves difficult problems, which has
                often led him to take on challenges he can't flawlessly overcome.
                This has at times brought hardship to his life, causing him to
                turn to art, and eventually, <span className={styles.p4}>mistakes</span> creation. <br/>
            </p>
            <p className={styles.p3}>
                The few who were close to him before
                &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                <FootnoteRef idFn={id}>4</FootnoteRef> described him as
                both extremely reserved and highly transparent, meticulously
                choosing when to share and when to not.
            </p>
            <p className={styles.p3}>
                Those who worked with him described as a reliable and versatile
                member of a team, capable of contributing in whichever way is
                most convenient. He is said to be generally compromising and understanding,
                but may benevolently criticize work he considers objectively imperfect;
                his collaborators advise being open to feedback and returning the favor.
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                References:
            </p>
            <Footnote idFn={id} label="1">
                Ingeniería en Sistemas de Información — Universidad Tecnológica Nacional.
            </Footnote>
            <Footnote idFn={id} label="2">
                He his currently mastering Java 21 and the Spring ecosystem. Despite this
                specialization, the developer aims to learn to make computers do anything
                computers can do. This means he is also exploring, to different extents,
                frontend technologies, architecture, devops and system design. He will
                soon begin to EXPUNGED.
            </Footnote>
            <Footnote idFn={id} label="3">
                EXPUNGED.
            </Footnote>
            <Footnote idFn={id} label="4">
                EXPUNGED.
            </Footnote>
            <Footnote idFn={id} label="3712">
                <span>The anomaly has been declared the cause of
                    &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;
                    &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;, such as the birth of
                    &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    known as &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;,
                    who is credited
                    &#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;
                    &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    &#x2588;&#x2588; &#x2588;&#x2588; estimate of over twenty thousand of
                    &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    <span className={styles.p4}>I am sorry</span>. <br/>
                    The organization known as &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    attribute the &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;
                    &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    and the &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    &#x2588;&#x2588; The Machine &#x2588;&#x2588; &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    &#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                    to the actions of this individual. <br/></span>
            </Footnote>
        </TextContainer>
    </>
};