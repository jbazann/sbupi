import TextContainer from "@c/text/TextContainer.server.jsx";
import styles from '@c/text/TextContainer.module.css'
import Footnote from "@c/clickable/footnote/Footnote.server.jsx";
import FootnoteRef from "@c/clickable/footnote/FootnoteRef.server.jsx";
import {ids} from "@/lib/common.js";
import {useContext} from "react";
import {Lang} from "@/lib/context.js";

export default function Sbupi() {
    switch (useContext(Lang)) {
        case 'es': return es()
        default: return en()
    }
};

function en() {
    const [
        ref1, ref2, ref3, ref4
    ] = ids()
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The Sbupi project</b></h2>
            <p className={styles.h3}>
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
                <FootnoteRef target={ref1}>1</FootnoteRef>
                .
            </p>
            <p className={styles.p3}>
                The current version is built with Vite, it leverages Vike to scaffold the annoying parts
                of integrating React, but the code actively avoids letting
                the framework handle state (where viable)
                <FootnoteRef target={ref2}>2</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p1}>
                Features:
            </p>
            <ol>
                <li>
                    Custom e-mail addresses such as mail@jbazann.dev, without using nor implementing
                    an actual mailing service
                    <FootnoteRef target={ref3}>3</FootnoteRef>
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
                    Integration with <a href="https://thecatapi.com" target="_blank">
                    TheCatAPI
                </a>, and <a href="https://www.cloudflare.com/developer-platform/products/r2/" target="_blank">
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
                            <FootnoteRef target={ref4}>4</FootnoteRef>
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
                            The Archive will return to this section at a future time.
                        </li>
                    </ol>
                </li>
            </ol>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                References:
            </p>
            <Footnote id={ref1} label="1">
                The previous versions are unavailable, as they do not represent my current
                knowledge and expertise. They were built using different
                approaches, with TailwindCSS v3 and v4, and at some point Alpinejs.
                Feel free to ask about them when you interview me for an awesome big money job.
            </Footnote>
            <Footnote id={ref2} label="2">
                This deviates from React's principles in order
                to develop a deeper understanding of the benefits and
                drawbacks of programmatic rendering, and all the ways
                a more vanilla approach can be more advantageous.
                I also enjoy doing things my own away and learning from the consequences.
            </Footnote>
            <Footnote id={ref3} label="3">
                Though it doesn't replace the reliability of a dedicated
                and complete service, it is a simple and free alternative
                that integrates both platforms smoothly.
                It also minimizes technical overhead while still looking cool
                in a resume.
            </Footnote>
            <Footnote id={ref4} label="4">
                The amount per execution is limited by Cloudflare Workers' free plan runtime
                and sub-request limits. The actual workflow consists of dispatching
                requests asynchronously, then immediately responding with randomly
                selected images from the bucket. Then, the worker encondes and stores
                as many images as possible,
                before the CPU-time limit forces its termination.
            </Footnote>
        </TextContainer>
    </>
}

function es() {
    const [
        ref1, ref2, ref3, ref4
    ] = ids()
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The Sbupi project</b></h2>
            <p className={styles.h3}>
                La página que está viendo. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                Hoesteado por Cloudflare Pages. Desplegado
                mediante <a href="https://github.com/jbazann/sbupi" target="_blank">
                este</a> repositorio en GitHub.
            </p>
            <p className={styles.p3}>
                Este proyecto fue reiniciado cuatro veces, por lo que aunque esté listado como
                uno solo, en realidad es el último producto de un largo proceso de aprendizaje
                <FootnoteRef target={ref1}>1</FootnoteRef>
                .
            </p>
            <p className={styles.p3}>
                La versión actual es construida con Vite, aprovecha Vike para estructurar las partes
                molestas de integrar React,
                pero el diseño intenta activamente evitar que React gestione el estado (donde sea viable)
                <FootnoteRef target={ref2}>2</FootnoteRef>
                . <br/>
            </p>
            <p className={styles.p1}>
                Features:
            </p>
            <ol>
                <li>
                    Direcciones de e-mail personalizadas, tales como mail@jbazann.dev,
                    sin usar ni implementar un servicio de correo real.
                    <FootnoteRef target={ref3}>3</FootnoteRef>
                    .
                    <ol>
                        <li>
                            Cloudflare re-enruta los mensajes entrantes a <em><i>jbazanndev@gmail.com</i></em>,
                        </li>
                        <li>
                            El servicio SMTP de Google permite mensajes salientes bajo el dominio <em><i>jbazann.dev</i></em>.
                        </li>
                    </ol>
                </li>
                <li>
                    Integración con <a href="https://thecatapi.com" target="_blank">
                    TheCatAPI
                </a>, y <a href="https://www.cloudflare.com/developer-platform/products/r2/" target="_blank">
                    Cloudflare R2
                </a>.
                    <ol>
                        <li>
                            Navegar a <a href="https://jbazann.dev/cat">
                            jbazann.dev/cat</a> envía una solicitud a un worker en
                            <a href="https://jbazann.dev/w/cats">
                            jbazann.dev/w/cats</a>
                        </li>
                        <li>
                            El worker verifica los límites (almacenados en R2) de su API key,
                            y cuando es posible, scrapea imagenes de gatos para guardarlas en el bucket
                            <FootnoteRef target={ref4}>4</FootnoteRef>
                            .
                        </li>
                        <li>
                            Independientemente de los resultados del paso de scraping, el worker responde
                            con una lista de URLs en base 64 del almacenamiento de objetos.
                        </li>
                    </ol>
                </li>
                <li>
                    Y más!
                    <ol>
                        <li>
                            El Registro volverá a esta sección en un tiempo futuro.
                        </li>
                    </ol>
                </li>
            </ol>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                Referencias:
            </p>
            <Footnote id={ref1} label="1">
                Las versiones anteriores no están disponibles, ya que no representan mis conocimientos actuales.
                Fueron construidas usando diferentes arquitecturas,
                con TailwindCSS v3 y v4, y en algún punto con Alpinejs.
                Siéntase libre de preguntarme al respecto cuando me entreviste para un trabajo copado que pague mucho.
            </Footnote>
            <Footnote id={ref2} label="2">
                Esto se desvía de los principios de React para permitirme
                desarrollar un entendimiento más profundo sobre las fortalezas y
                debilidades del renderizado procedural, y todas las formas en que
                una arquitectura más vanilla puede ser más conveniente.
                También me gusta hacer las cosas a mi manera y aprender de las consecuencias.
            </Footnote>
            <Footnote id={ref3} label="3">
                Aunque no reemplaza la confiabilidad de un servicio dedicado,
                es una alternativa simple y gratuita que integra ambas plataformas en forma sencilla.
                También minimiza la carga ténica sin dejar de quedar copado en un CV.
            </Footnote>
            <Footnote id={ref4} label="4">
                La cantidad por ejecución está limitada por los límites de runtime y
                sub-requests de Cloudflare Workers.
                El proceso real consiste en enviar solicitudes asíncronas, e inmediatamente
                responder con imagenes aleatorias de las ya existentes en el Bucket R2.
                Finalmente el worker codifica y almacena tantas imagenes como pueda
                hasta que el límite de CPU finaliza la ejecución.
            </Footnote>
        </TextContainer>
    </>
}