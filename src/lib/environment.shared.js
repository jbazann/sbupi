export {
    devmode,
    netlog,
    routingDisabled
}

const devmode = import.meta.env?.DEV ||
    import.meta.env?.VITE_PUBLIC_ENV__JBAZANN_DEV === 'true'

const netlog = import.meta.env?.VITE_PUBLIC_ENV__JBAZANN_NETLOG === 'true'

const routingDisabled = import.meta.env?.VITE_PUBLIC_ENV__JBAZANN_ROUTING === 'off'

let lang = typeof document !== 'undefined' ? document.documentElement.lang : 'en';