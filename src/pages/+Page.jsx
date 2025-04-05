import ContentArea from "../components/ContentArea.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MenuContent from "../components/MenuContent.jsx";
import MainMenu from "../components/MainMenu.jsx";
import {clientOnly} from "vike-react/clientOnly";

const MainMenuScripts = clientOnly(() => import("../components/MainMenuScripts.client.jsx"))

export default function Home() {
    return (
        <>
            <ContentArea header={
                <Header />
            } mainContent={
                <MenuContent content={[
                    <MainMenu key='x' />,
                    <MainMenuScripts key='d' />
                ]}/>} footer={
                <Footer />}
            />
        </>
    )
}