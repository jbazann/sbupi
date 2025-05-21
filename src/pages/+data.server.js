import ContentArea from "@c/layout/ContentArea.server.jsx"
import Header from "@c/layout/Header.server.jsx"
import MainMenu from "@c/menu/main/MainMenu.server.jsx"
import Footer from "@c/layout/Footer.server.jsx"
import Router from "@c/system/Router.shared.jsx"
import {get} from "@l/net.shared.js"

export { data }

// imports aren't the point of this hook
// but it's a good way to keep them off the client
// without using dynamic imports
// TODO make Vike stop attempting to serialize this in the build
async function data(pageContext) {
    const poems = get("/w/poems", {lang: pageContext?.lang || 'en'})

    return {
        poems,
        ContentArea,
        Header,
        MainMenu,
        Footer,
        Router
    }
}