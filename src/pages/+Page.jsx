import './Layout.css'
import {useData} from "vike-react/useData";
import {useContext} from "react";
import {Lang} from "../lib/context.js";

export default function Page() {
    if (import.meta.env.SSR) {
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
            StaticMenuButtonScript: import('../components/clickable/smb/StaticMenuButtonScript.client.jsx'),
            ActionButtonScript: import('../components/clickable/ActionButtonScript.client.jsx'),
            CatMenuScript: import('../components/menu/cat/CatMenuScript.jsx'),
            SettingsMenuScript: import('../components/menu/settings/SettingsMenuScript.client.jsx'),
            Router: import("../components/Router.shared.jsx"),
        }
    }
}