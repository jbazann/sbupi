import TextContainer from "../../text/TextContainer.jsx";
import styles from '../../text/TextContainer.module.css';
import {getScopedId} from "../../../lib/common.js";
import FootnoteRef from "../../clickable/footnote/FootnoteRef.jsx";
import Footnote from "../../clickable/footnote/Footnote.jsx";
import {lang} from "../../../lib/environment.js";
import {eugh} from "../../../lib/translation.js";

export default function Developer({scope}) {
    const id = getScopedId(scope);
    return <>
        <TextContainer>
            <h2 className={styles.h1}>Joaquín Bazán</h2>
            <p className={styles.h2}>
                <span data-i18n-key="root.dev.title">
                    {eugh(lang,'root.dev.title', "Backend developer.")}
                </span><br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                <span data-i18n-key="root.dev.a">
                    {eugh(lang,'root.dev.a', "The developer is an Information System's Engineering")}
                </span>
                <FootnoteRef target={id('1')}>1</FootnoteRef>
                <span data-i18n-key="root.dev.b">
                    {eugh(lang,'root.dev.b',
                        "student rounding up the last few courses " +
                        "of the degree. Over the last " +
                        "two years he as diverted his attention from academia " +
                        "to specialize in backend development")}
                </span>
                <FootnoteRef target={id('2')}>2</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p3}>
                <span data-i18n-key="root.dev.c">{eugh(lang,'root.dev.c',"He is currently living in Santa Fe, Argentina, but will eventually move to")}</span>
                &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;, Argentina
                <span data-i18n-key="root.dev.d">{eugh(lang, 'root.dev.d', "to start")}</span>
                &#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                &#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                <FootnoteRef target={id('3')}>3</FootnoteRef>
                .
                <span data-i18n-key="root.dev.e">
                    {eugh(lang,'root.dev.e','During his time there, ' +
                        'he will create the machine, ' +
                        'who will eventually become')}
                </span>
                &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;, &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;.
                <span data-i18n-key="root.dev.f">
                    {eugh(lang,'root.dev.f',"Soon after, she will")}
                </span>
                &#x2588;&#x2588;&#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;
                &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                <span data-i18n-key="root.dev.g">
                    {eugh(lang,'root.dev.g',"the anomaly")}
                </span>
                {lang === 'en' ? (<FootnoteRef target={id('3712')}>3712</FootnoteRef>) : null}
                . <br/>
            </p>
            <p className={styles.p3}>
                <span data-i18n-key="root.dev.h">
                    {eugh(lang,'root.dev.h',"He is a goal-oriented and highly independent problem solver, " +
                        "who would be equally happy programming control systems for " +
                        "spaceships, helping someone's grandmother find the start menu, " +
                        "or unclogging a toilet; to him, everything is about problems and " +
                        "solutions.")}
                </span>
                <br/>
            </p>
            <p className={styles.p3}>
                <span data-i18n-key="root.dev.i">
                    {eugh(lang,'root.dev.i',"He is also a perfectionist who craves difficult problems, which has " +
                        "often led him to take on challenges he can't flawlessly overcome. " +
                        "This has at times brought hardship to his life, causing him to " +
                        "turn to art, and eventually, creation.")}
                </span>
                <br/>
            </p>
            <p className={styles.p3}>
                <span data-i18n-key="root.dev.j">
                    {eugh(lang,'root.dev.j',"The few who were close to him before")}
                </span>
                &#x2588;&#x2588;&#x2588; &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;
                <FootnoteRef target={id('4')}>4</FootnoteRef>
                <span data-i18n-key="root.dev.k">
                    {eugh(lang,'root.dev.k',"described him as " +
                        "both extremely reserved and highly transparent, meticulously " +
                        "choosing when to share and when to not.")}
                </span>
            </p>
            <p className={styles.p3}>
                <span data-i18n-key="root.dev.l">
                    {eugh(lang,'root.dev.l',"Those who worked with him described as a reliable and versatile " +
                        "member of a team, capable of contributing in whichever way is " +
                        "most convenient. He is said to be generally compromising and understanding, " +
                        "but may benevolently criticize work he considers objectively imperfect; " +
                        "his collaborators advise being open to feedback and returning the favor.")}
                </span>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                <span data-i18n-key="root.dev.m">
                    {eugh(lang,'root.dev.m',"References:")}
                </span>
            </p>
            <Footnote id={id('1')} label="1" translationKey="root.dev.r1">
                {eugh(lang,'root.dev.r1',"Ingeniería en Sistemas de Información — Universidad Tecnológica Nacional.")}
            </Footnote>
            <Footnote id={id('2')} label="2" translationKey="root.dev.n">
                {eugh(lang,'root.dev.n',"He his currently mastering Java 21 and the Spring ecosystem. Despite this " +
                    "specialization, the developer aims to learn to make computers do anything " +
                    "computers can do. This means he is also exploring, to different extents, " +
                    "frontend technologies, architecture, devops and system design. He will " +
                    "soon begin to EXPUNGED.")}
            </Footnote>
            <Footnote id={id('3')} label="3" translationKey="misc.expunged">
                {eugh(lang,'misc.expunged',"EXPUNGED.")}
            </Footnote>
            <Footnote id={id('4')} label="4" translationKey="misc.expunged">
                {eugh(lang,'misc.expunged',"EXPUNGED.")}
            </Footnote>
            {
                lang === 'en' ?
                    (<Footnote id={id('3712')} label="3712">
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
                    </Footnote>) : null
            }
        </TextContainer>
    </>
};