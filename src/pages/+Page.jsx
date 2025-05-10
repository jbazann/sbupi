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
            StaticMenuButtonScript: import('@c/clickable/smb/StaticMenuButtonScript.client.jsx'),
            ActionButtonScript: import('@c/clickable/ActionButtonScript.client.jsx'),
            CatMenuScript: import('@c/menu/cat/CatMenuScript.jsx'),
            SettingsMenuScript: import('@c/menu/settings/SettingsMenuScript.client.jsx'),
            Router: import("@c/Router.shared.jsx"),
        }
    }
}