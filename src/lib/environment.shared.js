export {
    devmode,
    netlog
}

const devmode = import.meta.env?.DEV ||
    import.meta?.env?.PUBLIC_ENV__JBAZANN_DEV === 'true'
const netlog = import.meta.env?.PUBLIC_ENV__JBAZANN_NETLOG === 'true'
let lang = typeof document !== 'undefined' ? document.documentElement.lang : 'en';