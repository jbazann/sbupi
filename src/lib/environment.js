export const devmode = import.meta.env.DEV || import.meta.env.PUBLIC_ENV__JBAZANN_DEV === 'true';
export const netlog = import.meta.env.PUBLIC_ENV__JBAZANN_NETLOG === 'true' || false
export let lang = typeof document !== 'undefined' ? document.documentElement.lang : 'en';

export function fixLang(l) {
    lang = l
}