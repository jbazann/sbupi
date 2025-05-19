import TextContainer from "@c/text/TextContainer.server.jsx";
import styles from '@c/text/TextContainer.module.css'
import {useContext} from "react";
import {Lang} from "@/lib/context.js";
import Footnote from "@c/clickable/footnote/Footnote.server.jsx";
import FootnoteRef from "@c/clickable/footnote/FootnoteRef.server.jsx";
import {ids} from "@l/common.js";

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
                I define each of these packages as a micro-service, for a total of
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
                Though this means that all of these features will be included in the
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
                These events require, among other things, the list
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
            <h1 className={styles.h1}>The Skwidl project</h1>
            <p className={styles.h3}>
                Una prueba de concepto con microservicios. <br/>
            </p>
            <div className={`hr ${styles.hr}`}></div>
            <p className={styles.p3}>
                La traducción al español estará disponible en los próximos días.
            </p>
            <div className={`hr ${styles.hr}`}></div>
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
                I define each of these packages as a micro-service, for a total of
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
                Though this means that all of these features will be included in the
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
                These events require, among other things, the list
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