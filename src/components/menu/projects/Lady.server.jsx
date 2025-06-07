import TextContainer from "@c/layout/text/TextContainer.shared.jsx";
import styles from '@c/layout/text/TextContainer.module.css'
import Footnote from "@c/layout/text/footnote/Footnote.server.jsx";
import FootnoteRef from "@c/layout/text/footnote/FootnoteRef.server.jsx";
import {ids} from "@/lib/common.shared.js";
import {useContext} from "react";
import {Lang} from "@l/context.shared.js";

export default function Lady() {
    switch (useContext(Lang)) {
        case 'es': return es()
        default: return en()
    }
};

function en() {
    const [
        ref1
    ] = ids(1)
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The PostLady project</b>
                <FootnoteRef target={ref1}>1</FootnoteRef>
            </h2>
            <p className={styles.h3}>
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
}

function es() {
    const [
        ref1
    ] = ids(1)
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The PostLady project</b>
                <FootnoteRef target={ref1}>1</FootnoteRef>
            </h2>
            <p className={styles.h3}>
                Una alternativa a Postman que no usa Javascript para el backend.<br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                Apenas empiezo este proyecto! Vuelva a mediados de 2025 para ver
                algo interesante en esta seccion.
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                Referencias:
            </p>
            <Footnote id={ref1} label='1'>
                Prometo cambiar el nombre del proyecto a algo que no haga que me
                demanden si algún día publico una release.
            </Footnote>
            <p>2: <a href="/w/t/f" target="_blank">??????</a></p>
        </TextContainer>
    </>
}