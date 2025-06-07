import TextContainer from "@c/layout/text/TextContainer.shared.jsx";
import styles from '@c/layout/text/TextContainer.module.css'
import {useContext} from "react";
import {Lang} from "@l/context.shared.js";
import Footnote from "@c/layout/text/footnote/Footnote.server.jsx";
import FootnoteRef from "@c/layout/text/footnote/FootnoteRef.server.jsx";
import {ids} from "@l/common.shared.js";

export default function Skwidl() {
    switch (useContext((Lang))) {
        case 'es': return es()
        default: return en()
    }
};

function en() {
    const [
        ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12
    ] = ids(12)
    return <>
        <TextContainer>
            <h1 className={styles.h1}>The Skwidl project
                <FootnoteRef target={ref1}>1</FootnoteRef>
            </h1>
            <p className={styles.p3}>
                A microservices proof-of-concept. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                A generic CRUD application with arbitrary constraints
                intended to create opportunities to explore the design
                challenges of micro-services architectures. <br/>
                The code is publicly available in <a href="https://github.com/jbazann/skwidl" target="_blank">
                this</a> GitHub repository.
            </p>
            <h2 className={styles.h2}>Index</h2>
            <ul>
                <li className={styles.p2}>Soon!</li>
            </ul>
            <h2 id="overview" className={styles.h2}>Overview</h2>
            <p className={styles.p3}>
                As of may 2025, it's composed of three domain logic
                deployables: <em>customers</em>, <em>products</em>, and <em>orders</em>. Each of these
                is internally structured with domain driven design (DDD),
                with separate, highly decoupled packages for the entities
                <em> customer</em>, <em>user</em>, <em>site</em>, <em>product</em>, (product) <em>category</em>,
                and <em>order</em>.
            </p>
            <p className={styles.p3}>
                Each of these packages is treated as a potential micro-service, for a total of
                six, bundled together into three
                artifacts<FootnoteRef target={ref2}>2</FootnoteRef> following
                something similar to a monolith-first philosophy.
            </p>
            <h2 className={styles.h2}>Architecture</h2>
            <p className={styles.p3}>
                In these multi-service deployables, everything is built to
                facilitate the future extraction into an independent artifact. For example,
                the <em>customer</em> package configures its own database connections,
                has its own AMQP listeners, and is only coupled with the other
                packages through dedicated classes such as <code>SiteServiceLocalClient</code>,
                which implements the interface <code>SiteServiceClient</code>.
            </p>
            <p className={styles.p3}>
                This enables same-deployable services to avoid network overhead
                when communicating with each other, while remaining agnostic
                to the way this communication happens; if scaling requires
                extracting any of these services into their own deployable,
                it's only a matter of implementing the corresponding
                client<FootnoteRef target={ref3}>3</FootnoteRef>, and
                updating Spring bean definitions so that the correct implementation
                is autowired.
            </p>
            <p className={styles.p3}>
                Even at the API layer, routing is handled with a custom predicate
                that checks Eureka metadata, in which each registered service
                declares a list of "collections" it exposes. That way, external
                requests are made to, for example, '/app/users/...',
                and they are seamlessly routed to <em>customers</em>,
                the deployable that (currently) contains the service/collection.
            </p>
            <p className={styles.p3}>
                Along with the three domain logic deployables are:
                <ul>
                    <li>A Spring Cloud API Gateway.</li>
                    <li>A Nextjs UI server (WIP).</li>
                    <li>Two Eureka server instances.</li>
                    <li>A shared Redis instance.</li>
                    <li>A local Graylog deployment.</li>
                    <li>Local Grafana and Prometheus deployments.</li>
                    <li>A remote (CloudAMQP) RabbitMQ message broker
                        <FootnoteRef target={ref4}>4</FootnoteRef>.
                    </li>
                </ul>
                And the whole architecture is managed by Kubernetes, which
                itself is integrated into the build process by JKube's Maven plugin.
            </p>
            <h2 className={styles.h2}>Commons</h2>
            <p className={styles.p3}>
                All domain services have a dependency on the <em>commons</em> module.
                This module is a catch-all for anything that needs to be done in all
                Java/Spring based services. The current features that stand out are:
            </p>
            <ul className={styles.p3}>
                <li>AMQP integration.</li>
                <li>Connection to shared Redis service.</li>
                <li>Custom framework for distributed transactions.</li>
                <li>Custom abstractions for logging, test data generation, and other minor utilities.</li>
            </ul>
            <p className={styles.p3}>
                Though this (currently) means that all of these features will be included in the
                production bundle, the <em>commons</em> module is designed to expose
                decorators that selectively enable configuration classes,
                so that only the required beans are created at runtime<FootnoteRef target={ref5}>5</FootnoteRef>.
            </p>
            <h2 id="overview" className={styles.h2}>Framework for distributed transactions</h2>
            <p className={styles.p3}>
                Services may assign themselves up to three possible
                roles: <em>starter</em>, <em>member</em>, and <em>coordinator</em>.
            </p>
            <p className={styles.p3}>
                <em>Starter</em> services expose endpoints to start distributed
                transactions<FootnoteRef target={ref6}>6</FootnoteRef>.
                This requires, among other things, the list
                of <em>member</em> services that should respond to the transaction,
                and a valid <em>coordinator</em>. So starter services must be
                aware of the identifiers of other services
                (see <code>...commons.identity.ApplicationMember</code>),
                and of course be able to send events to the correct exchange,
                but they have no need to listen to any queues at all.
            </p>
            <p className={styles.p3}>
                <em>Member</em> services register <code>TransactionStage</code> beans
                to handle a subset of events<FootnoteRef target={ref7}>7</FootnoteRef>.
                All they need to worry about is defining a bean for each
                relevant stage, of every transaction type (event class) they can
                be expected to participate on<FootnoteRef target={ref8}>8</FootnoteRef>. <br/>
                Additionally, they may declare a list of distributed <code>EntityLock</code>(s)
                to be acquired/released before/after executing a <code>TransactionStage</code>,
                and the framework will handle them too (WIP).
            </p>
            <p className={styles.p3}>
                <em>Coordinator</em> services may be chosen as transaction coordinators.
                They will keep a <code>CoordinatedTransaction</code> instance with the
                state of the transaction, listen to events published by <em>members</em>,
                and trigger the execution of transaction stages
                accordingly (i.e.: rollback, commit, etc).
                The framework handles all of this behavior internally, so coordinators
                need only to assign themselves the role, and ensure they have
                an <code>ApplicationMember</code> bean with an ID that is known
                to <em>starter</em> services<FootnoteRef target={ref9}>9</FootnoteRef>.
            </p>
            <h2 id="overview" className={styles.h2}>TransactionStage abstractions</h2>
            <p className={styles.p3}>
                <em>Member</em> services can implement the <code>TransactionStage</code> interface
                to represent a single stage of a single transaction kind.
                This interface (currently) requires two
                methods: <code>runStage(DomainEvent,Transaction)</code> and <code>getRequiredLocks(DomainEvent)</code>.
                <br/>
                In order for these implementations to be found by the framework,
                they must also be annotated with <code>@TransactionStageBean</code>.
                This annotation incorporates a bean name, the <code>DomainEvent</code> subclass
                that represents the transaction kind, and a <code>Stage</code> enum
                value that represents the step within the transaction.
            </p>
            <p className={styles.p3}>
                At some point during the application's initialization (subject to review),
                a <code>TransactionStageRegistrarService</code> will fetch
                all <code>@TransactionStageBean</code> annotated components and
                organize them in a map structure with the event class and
                stage value as composite key.
            </p>
            <p className={styles.p3}>
                As events arrive, the listener determines whether the event
                should trigger the execution of a stage, at which
                point <code>TransactionStageExecutorService</code> will
                request the corresponding stage bean, (optionally) acquire
                locks, run the stage, (optionally) release locks, and
                publish an event with the result for the coordinator to handle.
            </p>
            <p className={styles.p3}>
                Internally, the code for <em>member</em> services also
                persists a <code>Transaction</code> entity (the one mentioned
                as argument to the <code>runStage</code> method above),
                containing some data such as the transaction's expiration
                timestamp and its current status. <br/>
                Services are responsible for updating this status, in
                a workflow that is subject to change.
            </p>
            <p className={styles.p3}>
                Some preliminary usage examples can be found
                in <code>...orders.order.transactions.*</code>
            </p>
            <h2 id="overview" className={styles.h2}>More soon</h2>
            <p className={styles.p3}>
                More details to come! I am also working on some illustrations,
                sorry if this was boring to read.
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
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                References:
            </p>
            <Footnote id={ref1} label="1">
                This section is a work in progress, and I am currently
                refactoring some patterns in the code. Expect minor inconsistencies
                and lack of coverage.
            </Footnote>
            <Footnote id={ref2} label="2">
                More specifically, the <em>customers</em> deployable contains
                the <code>customer</code>, <code>user</code> and <code>site</code> services,
                the <em>products</em> deployable is composed
                by <code>product</code> and <code>category</code>,
                and the <em>orders</em> deployable stands
                as the only proper "micro" service.
            </Footnote>
            <Footnote id={ref3} label="3">
                See <code>ProductServiceRestClient</code> in <em>orders</em>.
            </Footnote>
            <Footnote id={ref4} label="4">
                For the final release, I intend to add the option to deploy
                the broker locally. But that is boring DevOps work that I
                will do later.
            </Footnote>
            <Footnote id={ref5} label="5">
                This doesn't scale well, but it's easier to manage than dedicated dependencies
                for every little feature I need.
            </Footnote>
            <Footnote id={ref6} label="6">
                By sending the corresponding event
                with <code>DomainEvent.Type.REQUEST</code> to the exchange.
            </Footnote>
            <Footnote id={ref7} label="7">
                These events are normally
                from <code>...commons.async.events.specialized.*</code>, but they
                may be of any class that extends <code>...commons.async.events.DomainEvent</code>,
                provided that all <em>member</em> services have compatible representations
                to deserialize into.
            </Footnote>
            <Footnote id={ref8} label="8">
                The framework will handle any missing
                stages by failing the transaction gracefully (WIP), though this should
                have no reason to ever happen.
            </Footnote>
            <Footnote id={ref9} label="9">
                This last item is subject to change,
                since Eureka available is in the system. Currently, service discovery
                metadata isn't used for this purpose because I didn't want services
                to fetch the registry. At some point it made sense that only
                the Gateway should do it, but I don't think I lose anything
                meaningful by going back on this decision.
            </Footnote>
        </TextContainer>
    </>
}

function es() {
    const [
        ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12
    ] = ids(12)
    return <>
        <TextContainer>
            <h1 className={styles.h1}>The Skwidl project
                <FootnoteRef target={ref1}>1</FootnoteRef>
            </h1>
            <p className={styles.h3}>
                Una prueba de concepto con microservicios. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                Una aplicación ABM genérica con restricciones arbitrarias,
                con el fin de crear oportunidades para explorar los desafíos de
                diseño en las arquitecturas de microservicios. <br/>
                El código está disponible en <a href="https://github.com/jbazann/skwidl" target="_blank">
                este</a> repositorio de GitHub.
            </p>
            <h2 id="overview" className={styles.h2}>Overview</h2>
            <p className={styles.p3}>
                A Mayo de 2025, está compuesto por tres desplegables
                con lógica de dominio: <em>customers</em>, <em>products</em>, y <em>orders</em>.
                Cada uno de estos está estructurado internamente con
                domain driven design (DDD), con paquetes individuales
                y altamente desacoplados para las entidades
                <em> customer</em>, <em>user</em>, <em>site</em>, <em>product</em>, (product) <em>category</em>,
                y <em>order</em>.
            </p>
            <p className={styles.p3}>
                Cada uno de estos paquetes es tratado como un potencial micro-servicio, para
                un total de seis, compilados en tres artefactos
                desplegables<FootnoteRef target={ref2}>2</FootnoteRef> siguiendo
                algo similar a una filosofía monolith-first.
            </p>
            <h2 className={styles.h2}>Arquitectura</h2>
            <p className={styles.p3}>
                En estos desplegables multi-servicio, todo está construido para
                facilitar la futura extracción a artefactos independientes.
                Por ejemplo, el paquete <em>customer</em> configura sus propias conexiones
                a bases de datos, tiene sus propios listeners AMQP, y solo se acopla
                a los demás paquetes a través de clases dedicadas como <code>SiteServiceLocalClient</code>,
                la cual implementa la interfaz <code>SiteServiceClient</code>.
            </p>
            <p className={styles.p3}>
                Esto permite que servicios en un mismo desplegable se comuniquen
                sin pasar por la pila de red, y de manera agnóstica a cómo
                ocurre esta comunicación; si para escalar es necesario
                extraer cualquiera de estos servicios a su propio desplegable,
                solo es cuestión de implementar el cliente correspondiente<FootnoteRef target={ref3}>3</FootnoteRef>,
                y actualizar las definiciones de beans para Spring de manera que
                la aplicación utilice la implementación correcta.
            </p>
            <p className={styles.p3}>
                Incluso a nivel API, el enrutamiento es procesado por un predicate
                personalizado que verifica metadatos de Eureka, en los cuales
                cada servicio registrado (desplegable) declara una lista de
                "colecciones" que expone. De esta manera, las solicitudes
                externas son hechas a, por ejemplo, '/app/users/...',
                y son enrutadas a <em>customers</em>,
                el desplegable que (actualmente) contiene al servicio <em>users</em>.
            </p>
            <p className={styles.p3}>
                Junto a los tres desplegables de lógica hay:
                <ul>
                    <li>Un API Gateway de Spring Cloud.</li>
                    <li>Un servidor local de UI Nextjs (WIP).</li>
                    <li>Dos instancias locales de Eureka server.</li>
                    <li>Una instancia local de Redis compartida.</li>
                    <li>Un despliege local de Graylog.</li>
                    <li>Despliegues locales de Grafana y Prometheus.</li>
                    <li>Un message broker RabbitMQ remoto (CloudAMQP)
                        <FootnoteRef target={ref4}>4</FootnoteRef>.
                    </li>
                </ul>
                Y la arquitectura completa es gestionada por Kubernetes, el cual
                está integrado al proceso de build mediante el plugin para Maven de JKube.
            </p>
            <h2 className={styles.h2}>Commons</h2>
            <p className={styles.p3}>
                Todos los servicios de dominio tienen una dependencia en el módulo <em>commons</em>.
                Este es un módulo de propósito general para todo aquello que deba ser
                implementado por todos los servicios basados en Java/Spring.
                Las caracteristicas actuales que se destacan son:
            </p>
            <ul className={styles.p3}>
                <li>Integración con el broker AMQP.</li>
                <li>Conexión al nodo Redis compartido</li>
                <li>Framework personalizado para transacciones distribuídas.</li>
                <li>Abstracciones personalizadas para logging, generación de datos de prueba, y otras utilidades
                    menores.
                </li>
            </ul>
            <p className={styles.p3}>
                Aunque esto (actualmente) significa que todas estas funcionalidades serán
                incluídas en el compilado para producción, el módulo <em>commons</em> está
                diseñado para exponer decorators que selectivamente activan clases de configuración,
                de manera que solo los beans necesarios son creados en runtime<FootnoteRef target={ref5}>5</FootnoteRef>.
            </p>
            <h2 id="overview" className={styles.h2}>Framework para transacciones distribuídas</h2>
            <p className={styles.p3}>
                Los servicios pueden asignarse a sí mismos hasta tres posibles
                roles: <em>starter</em>, <em>member</em>, y <em>coordinator</em>.
            </p>
            <p className={styles.p3}>
                Los servicios <em>starter</em> exponen endpoints para iniciar
                transacciones distribuídas<FootnoteRef target={ref6}>6</FootnoteRef>.
                Para esto necesitan, entre otras cosas, la lista de servicios <em>member</em> que
                deben responder a la transacción, y un <em>coordinator</em> válido.
                Por lo que los servicios con el rol starter deben conocer
                los identificadores de los demás servicios (ver <code>...commons.identity.ApplicationMember</code>),
                y por supuesto ser capaces de enviar eventos al exchange correspondiente,
                pero no necesitan escuchar mensajes en ninguna cola.
            </p>
            <p className={styles.p3}>
                Los servicios <em>member</em> registran beans <code>TransactionStage</code> para
                responder a un subset de eventos<FootnoteRef target={ref7}>7</FootnoteRef>.
                Lo único de lo que deben ocuparse es definir un bean por cada
                etapa de transacción relevante, para cada tipo de transaccion (clase de evento)
                al que se puede esperar que respondan<FootnoteRef target={ref8}>8</FootnoteRef>. <br/>
                Adicionalmente, pueden declarar una lista de locks distribuídos mediante <code>EntityLock</code>,
                los cuales son adquiridos/liberados antes/después de ejecutar una <code>TransactionStage</code> (WIP).
            </p>
            <p className={styles.p3}>
                Los servicios <em>coordinator</em> pueden ser elegidos como coordinadores de una
                transacción. Estos gestionan una instancia de <code>CoordinatedTransaction</code> con
                el estado de la transacción, escuchan los eventos publicados por <em>members</em>,
                y controlan la ejecución de las distintas estapas de las transacciones (rollback, commit, etc).
                El framework gestiona todo este comportamiento internamente, por lo que
                los coordinadores solo necesitan asignarse el rol, y asegurarse de
                registrar un único bean de tipo <code>ApplicationMember</code> con un ID
                conocido por los servicios <em>starter</em><FootnoteRef target={ref9}>9</FootnoteRef>.
            </p>
            <h2 id="overview" className={styles.h2}>Abstracciones TransactionStage</h2>
            <p className={styles.p3}>
                Los servicios <em>member</em> pueden implementar la interfaz <code>TransactionStage</code> para
                representar una etapa individual de un tipo de transacción. La interfaz (actualmente)
                requiere dos
                métodos: <code>runStage(DomainEvent,Transaction)</code> and <code>getRequiredLocks(DomainEvent)</code>.
                <br/>
                Para que estas implementaciones puedan ser encontradas por el framework,
                también deben ser anotadas con <code>@TransactionStageBean</code>.
                Esta anotación incorpora un nombre para el bean, la subclase de <code>DomainEvent</code> que
                representa el tipo de transacción, y un valor del enum <code>Stage</code>,
                que representa la etapa dentro de la transacción.
            </p>
            <p className={styles.p3}>
                En algún punto durante la inicialización de la aplicación (sujeto a revisión),
                un <code>TransactionStageRegistrarService</code> recolecta todos los
                componentes anotados con <code>@TransactionStageBean</code> en
                una estructura map con la clase de evento y el valor de stage
                como clave compuesta.
            </p>
            <p className={styles.p3}>
                A medida que llegan eventos, el listener determina
                si se debería activar la ejecución de un <code>TransactionStage</code>,
                en cuyo caso <code>TransactionStageExecutorService</code> solicita
                el bean correspondiente del registro, (opcionalmente) adquiere
                los locks necesarios, ejecuta la etapa, (opcionalmente) libera
                los locks adquiridos, y publica un mensaje con el resultado
                para que lo procese el coordinador.
            </p>
            <p className={styles.p3}>
                Internamente, el código para los servicios <em>member</em> también
                persiste una entidad de tipo <code>Transaction</code> (mencionada
                anteriormente como argumento al metodo <code>runStage</code>),
                la cual contiene datos como el timestamp de expiración de la transacción,
                y su estado actual. <br/>
                Los servicios son responsables por actualizar este estado,
                en un workflow que aun es sujeto de cambios.
            </p>
            <p className={styles.p3}>
                Algunos ejemplos preliminares de uso pueden
                encontrarse en <code>...orders.order.transactions.*</code>
            </p>
            <h2 id="overview" className={styles.h2}>Más dentro de poco</h2>
            <p className={styles.p3}>
                Faltan más detalles! También estoy trabajando en algunas ilustraciones,
                perdón si fue aburrido de leer.
            </p>
            <p className={styles.p3}>
                Una primera release está casi lista. Solo falta
                testear la comunicación asíncrona a través de la
                cola de mensajes y el control de concurrencia, y actualizar
                el servidor de UI para consumir la API final.
            </p>
            <p className={styles.p3}>
                No voy a repetir el error de poner una fecha para esto.
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p1}>
                Referencias:
            </p>
            <Footnote id={ref1} label="1">
                Esta sección es un trabajo en progreso, y actualmente
                estoy haciendo refactors en algunos patrones en el código.
                Esperar inconsistencias menores y falta de cobertura.
            </Footnote>
            <Footnote id={ref2} label="2">
                Más especificamente, el desplegable <em>customers</em> contiene
                los servicios <code>customer</code>, <code>user</code> y <code>site</code>,
                el desplegable <em>products</em> está compuesto
                por <code>product</code> y <code>category</code>,
                y el desplegable <em>orders</em> resulta el único
                "micro" servicio propiamente dicho.
            </Footnote>
            <Footnote id={ref3} label="3">
                Ver <code>ProductServiceRestClient</code> en <em>orders</em>.
            </Footnote>
            <Footnote id={ref4} label="4">
                Para la release final, pienso agregar la opción de desplegar
                el broker localmente. Pero eso es trabajo aburrido de DevOps
                que voy a hacer más adelante.
            </Footnote>
            <Footnote id={ref5} label="5">
                Esto no escala muy bien, pero es más fácil de gestionar que dependencias dedicadas
                por cada pequeña feature que necesite.
            </Footnote>
            <Footnote id={ref6} label="6">
                Enviando el evento correspondiente con <code>DomainEvent.Type.REQUEST</code> al exchange.
            </Footnote>
            <Footnote id={ref7} label="7">
                Estos eventos son normalmente de <code>...commons.async.events.specialized.*</code>,
                pero pueden ser de cualquier clase que extienda <code>...commons.async.events.DomainEvent</code>,
                suponiendo que todos los servicios <em>member</em> tendrán una representación válida
                a la cual deserializar.
            </Footnote>
            <Footnote id={ref8} label="8">
                El framework manejará cualquier stage faltante
                fallando la transacción de manera controlada (WIP), aunque
                esto no debería tener razón para ocurrir.
            </Footnote>
            <Footnote id={ref9} label="9">
                Este último item es sujeto a cambios, ya que
                Eureka está disponible en el sistema.
                Actualmente, no utilicé metadatos de service discovery
                porque no quería que los servicios descargaran el registro.
                En algún momento tuvo sentido que solo el Gateway haga esto,
                pero no creo que pierda nada significativo al dar marcha
                atrás en esta decisión.
            </Footnote>
        </TextContainer>
    </>
}