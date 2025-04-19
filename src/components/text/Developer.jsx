import TextContainer from "./TextContainer.jsx";
import styles from './TextContainer.module.css';
import {getIdCounter} from "../../lib/common.js";
import FootnoteRef from "../footnote/FootnoteRef.jsx";
import Footnote from "../footnote/Footnote.jsx";

const id = getIdCounter()

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
                eventually move to --- to pursue ---. During his time there,
                he will create the machine
                <span className={styles.p4}>st#p me</span>
                , <span className={styles.p4}>#6 Ãny m=|ns </span>
                which will eventually become ---
                <span className={styles.p4}>and cause the anomaly
            <FootnoteRef idFn={id}>3712</FootnoteRef>
            </span>. <br/>
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
                The few who were close to him before -----
                <FootnoteRef idFn={id}>3</FootnoteRef>
                described him as
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
            <Footnote idFn={id} label="3712">
                <span>The anomaly has been declared the cause of --- who is credited
                ------<span className={styles.p4}>I am sorry.</span>. ---- attribute the ---- and ----- to it. -----. </span>
            </Footnote>
        </TextContainer>
    </>
};