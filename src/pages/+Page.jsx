import ContentArea from "../components/area/ContentArea.jsx";
import Header from "../components/area/Header.jsx";
import Footer from "../components/area/Footer.jsx";
import MainMenu from "../components/menu/main/MainMenu.jsx";
import {clientOnly} from "vike-react/clientOnly";
import {getGlobalId, getScopedId} from "../lib/common.js";
import PreContentScript from "../components/script/PreContentScript.jsx";

const PostContent = clientOnly(() => import('../components/script/PostContentScript.jsx'));
// const PreContent = clientOnly(() => import('../components/script/PreContentScript.jsx'));

export default function Page() {
    const id = getScopedId(getGlobalId('homepage'))
    return (
        <>
            <PreContentScript />
            <ContentArea
                header={ <Header /> }
                content={ <MainMenu scope={id('main')} /> }
                footer={ <Footer />}
            />
            <PostContent fallback="" />
        </>
    )
}