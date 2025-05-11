import TextContainer from "@c/text/TextContainer.server.jsx";
import styles from '@c/text/TextContainer.module.css'
import {useContext} from "react";
import {Lang} from "@/lib/context.js";

export default function Skwidl() {
    switch (useContext((Lang))) {
        case 'es': return es()
        default: return en()
    }
};

function en() {
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The Skwidl project</b></h2>
            <p className={styles.h2}>
                A microservices proof-of-concept. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                More details to come after 17/05/2025. A slightly outdated
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
}

function es() {
    return <>
        <TextContainer>
            <h2 className={styles.h1}><b>The Skwidl project</b></h2>
            <p className={styles.h2}>
                Una prueba de concepto con microservicios. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                Más detalles después del 17/05/2025. Una versión ligeramente desactualizada (y en inglés)
                está disponible en <a href="https://v2.jbazann.dev">v2.jbazann.dev</a>. <br/>
                El código está disponible públicamente en <a href="https://github.com/jbazann/skwidl" target="_blank">
                este</a> repositorio en GitHub.
            </p>
            <p className={styles.p3}>
                La primera release está casi lista. Solo falta testear
                la comunicación asíncrona a través de la cola de mensajes,
                el control de concurrencia distribuído,
                y actualizar la UI en el servidor Nextjs.
            </p>
            <p className={styles.p3}>
                No voy a repetir el error de poner una fecha para esto.
            </p>
        </TextContainer>
    </>
}