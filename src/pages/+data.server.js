import ContentArea from "../components/area/ContentArea.server.jsx"
import Header from "../components/area/Header.server.jsx"
import MainMenu from "../components/menu/main/MainMenu.server.jsx"
import Footer from "../components/area/Footer.server.jsx"
import Router from "../components/Router.shared.jsx"

export { data }

// imports aren't the point of this hook
// but it's a good way to keep them off the client
// without using dynamic imports
// TODO make Vike stop attempting to serialize this in the build
async function data(pageContext) {
    return {
        ContentArea,
        Header,
        MainMenu,
        Footer,
        Router
    }
}