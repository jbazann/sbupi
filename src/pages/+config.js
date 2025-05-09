import vikeReact from 'vike-react/config'

// https://vike.dev/config
export default {
    // https://vike.dev/head
    favicon: '/icon/favicon.png',
    reactStrictMode: false, // TODO TEMPORARY REMEMBER
    extends: vikeReact,
    prerender: true,
    clientRouting: false,
    lang: 'en',
    ssr: true,
    stream: true,
    title: "jbazann.dev",
    description: "Joaquín Bazán. Systems engineering student. Back-end developer. Java. Spring framework.",
}