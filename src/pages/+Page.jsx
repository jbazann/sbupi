import ContentArea from "../components/ContentArea.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MainMenu from "../components/menu/main/MainMenu.jsx";
import {clientOnly} from "vike-react/clientOnly";

const MainMenuScripts = clientOnly(() => import("../components/menu/main/MainMenuScripts.client.jsx"))
const Routing = clientOnly(() => import('../components/misc/RoutingScript.jsx'))
export default function Home() {
    return (
        <>
            <ContentArea header={
                <Header />
            } content={
                <MainMenu />
            } footer={
                <Footer />}
            />
            <MainMenuScripts />
            <Routing/>
        </>
    )
}