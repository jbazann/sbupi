import './Layout.css'
import {useData} from "vike-react/useData";
import {useContext} from "react";
import {Lang} from "@l/context.shared.js";
import {usePageContext} from "vike-react/usePageContext";

export default function Page() {
    if (import.meta.env?.SSR) {
        const pageContext = usePageContext()
        pageContext.lang = pageContext.lang || 'en'
        const lang = useContext(Lang)
        const {
            ContentArea,
            Header,
            MainMenu,
            Footer,
            Router
        } = useData()
        return (
            <>
                <Lang value={lang}>
                    <ContentArea
                        header={ <Header/> }
                        content={ <MainMenu /> }
                        footer={<Footer />}
                    />
                    <Router />
                </Lang>
            </>
        )
    } else {
        return {
            ServerMenuScript: import('@c/layout/menu/server/ServerMenuScript.jsx'),
            OnClickDispatchEventScript: import('@c/scripts/OnClickDispatchEventScript.jsx'),
            ActionButtonScript: import('@c/layout/control/ActionButtonScript.client.jsx'),
            CatMenuScript: import('@c/menu/cat/CatMenuScript.jsx'),
            SettingsMenuScript: import('@c/menu/settings/SettingsMenuScript.client.jsx'),
            Router: import("@c/system/Router.shared.jsx"),
            RoutingScript: import("@c/system/RoutingScript.jsx"),
            GalleryMenu: import("@c/menu/gallery/GalleryMenu.client.jsx")
        }
    }
}