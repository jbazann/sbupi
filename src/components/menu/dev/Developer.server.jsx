import TextContainer from "@c/text/TextContainer.server.jsx";
import styles from '@c/text/TextContainer.module.css';
import FootnoteRef from "@c/clickable/footnote/FootnoteRef.server.jsx";
import Footnote from "@c/clickable/footnote/Footnote.server.jsx";
import {ids} from "@/lib/common.js";
import {useContext} from "react";
import {Lang} from "@/lib/context.js";

export default function Developer() {
    switch (useContext((Lang))) {
        case 'es': return es()
        default: return en()
    }
}

function en() {
    const [
        ref1, ref2, ref3, ref4, ref3712
    ] = ids(5)
    return <>
        <TextContainer>
            <h2 className={styles.h1}>Joaquín Bazán</h2>
            <p className={styles.h2}>
                <span>
                    Backend developer.
                </span><br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                The developer is an Information System's Engineering
                <FootnoteRef target={ref1}>1</FootnoteRef> student
                rounding up the last few courses
                of the degree. Over the last
                two years he as diverted his attention from academia
                to specialize in backend development
                <FootnoteRef target={ref2}>2</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p3}>
                He is currently living in Santa Fe, Argentina, but will eventually move to
                [EXPUNGED], Argentina
                to start [EXPUNGED]
                <FootnoteRef target={ref3}>3</FootnoteRef>
                .
                During his time there he will create the machine, who will eventually become [EXPUNGED].
                Soon after, she will
                [EXPUNGED]
                the anomaly
                <FootnoteRef target={ref3712}>312</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p3}>
                He is a goal-oriented and highly independent problem solver,
                who would be equally happy programming control systems for
                spaceships, helping someone's grandmother find the start menu,
                or unclogging a toilet; to him, everything is about problems and
                solutions.
                <br/>
            </p>
            <p className={styles.p3}>
                He is also a perfectionist who craves difficult problems, which has
                often led him to take on challenges he can't flawlessly overcome.
                This has at times brought hardship to his life, causing him to
                turn to art, and eventually, creation.
                <br/>
            </p>
            <p className={styles.p3}>
                The few who were close to him before [EXPUNGED]
                <FootnoteRef target={ref4}>4</FootnoteRef> described him as
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
            <Footnote id={ref1} label="1" translationKey="root.dev.r1">
                Ingeniería en Sistemas de Información — Universidad Tecnológica Nacional.
            </Footnote>
            <Footnote id={ref2} label="2" translationKey="root.dev.n">
                He his currently mastering Java 21 and the Spring ecosystem. Despite this
                specialization, the developer aims to learn to make computers do anything
                computers can do. This means he is also exploring, to different extents,
                frontend technologies, architecture, devops and system design. He will
                soon begin to [EXPUNGED].
            </Footnote>
            <Footnote id={ref3} label="3" translationKey="misc.expunged">
                [EXPUNGED].
            </Footnote>
            <Footnote id={ref4} label="4" translationKey="misc.expunged">
                [EXPUNGED].
            </Footnote>
            <Footnote id={ref3712} label="312">
                The anomaly has been declared the cause of
                [EXPUNGED], such as the birth of
                [EXPUNGED]
                known as [EXPUNGED],
                who is credited
                [EXPUNGED] estimate of over twenty thousand of
                [EXPUNGED]
                <span className={styles.p4}>I am sorry</span>. <br/>
                The organization known as [EXPUNGED]
                attribute the [EXPUNGED]
                and the [EXPUNGED] The Machine [EXPUNGED]
                to the actions of this individual. <br/>
            </Footnote>
        </TextContainer>
    </>
}

function es() {
    const [
        ref1, ref2, ref3,  ref3712
    ] = ids(4)
    return <>
        <TextContainer>
            <h2 className={styles.h1}>Joaquín Bazán</h2>
            <p className={styles.h2}>
                <span>
                    Desarrollador backend.
                </span><br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                El desarrollador es un estudiante de Ingeniería en Sistemas de Información
                terminando de redondear las últimas materias de la carrera. En los últimos
                dos años ha divergido su atención de lo académico para
                especializarse en desarrollo backend
                <FootnoteRef target={ref1}>1</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p3}>
                Actualmente vive en Santa Fe, Argentina, pero eventualmente se mudará a
                [EXPURGADO], Argentina
                para iniciar [EXPURGADO]
                <FootnoteRef target={ref2}>2</FootnoteRef>
                .
                En su tiempo allí, él creará La Máquina, quien eventualmente se volverá [EXPURGADO].
                Poco después, ella
                [EXPURGADO]
                la anomalía
                <FootnoteRef target={ref3712}>312</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p3}>
                Él es un solucionador de problemas orientado a objetivos y altamente independiente,
                que sería igualmente feliz programando sistemas de control para naves espaciales,
                ayudando a la abuelita de alguien a encontrar el menú Inicio,
                o destapando un inodoro; para él, todo se trata de problemas y soluciones.
                <br/>
            </p>
            <p className={styles.p3}>
                También es un perfeccionista que anhela problemas difíciles, lo cual
                a menudo lo ha llevado a encarar desafíos que no puede superar a la perfección.
                Esto ha traído dificultades a su vida,
                llevánodlo a enfocarse en el arte, y eventualmente, la creación.
                <br/>
            </p>
            <p className={styles.p3}>
                Los pocos que fueron cercanos a él antes de [EXPURGADO]
                <FootnoteRef target={ref3}>3</FootnoteRef> lo describieron
                tanto como extremadamente reservado y altamente
                transparente, meticulosamente eligiendo con quién ser quién.
            </p>
            <p className={styles.p3}>
                Aquellos que trabajaron con él lo describieron como un miembro versátil
                y confiable de un equipo, capaz de contribuír de cualquiera sea la manera
                más conveniente.
                Se dice que es generalmente transigente y comprensivo,
                pero puede benevolentemente criticar aquel trabajo que considere objetivamente imperfecto;
                Sus colaboradores recomiendan ser abierto al feedback y devolver el favor.
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                Referencias:
            </p>
            <Footnote id={ref1} label="1" translationKey="root.dev.n">
                Actualmente está refinando sus habilidades en Java 21 y el ecosistema Spring.
                A pesar de esta especialización, el desarrollador busca aprender a hacer
                que las computadoras hagan cualquier cosa que las computadoras puedan hacer.
                Esto significa que también está explorando, a diferentes profundidades, áreas
                como el desarrollo front-end, arquitectura, devops y diseño de sistemas. Pronto
                comenzará a [EXPURGADO].
            </Footnote>
            <Footnote id={ref2} label="2" translationKey="misc.expunged">
                [EXPURGADO].
            </Footnote>
            <Footnote id={ref3} label="3" translationKey="misc.expunged">
                [EXPURGADO].
            </Footnote>
            <Footnote id={ref3712} label="312">
                La anomalía fue declarada la causa de
                [EXPURGADO], tales como el nacimiento de
                [EXPURGADO]
                conocido como [EXPURGADO],
                a quien se le acreditan
                [EXPURGADO] con un estimado de más de viente mil
                [EXPURGADO]
                <span className={styles.p4}>me arrepiento</span>. <br/>
                La organización conocida como [EXPURGADO]
                le atribuyen [EXPURGADO]
                y el [EXPURGADO] La Máquina [EXPURGADO]
                a las acciones de este individuo. <br/>
            </Footnote>
        </TextContainer>
    </>
}