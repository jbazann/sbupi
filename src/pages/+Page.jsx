import {createContext} from "react";
import './Layout.css'
import {useData} from "vike-react/useData";

export default function Page(data = {}) {
    if (import.meta.env.SSR) {
        let Context = data.Context
        if (!Context) Context = createContext({lang: 'en'})
        const {
            ContentArea,
            Header,
            MainMenu,
            Footer,
            Router
        } = useData()
        return (
            <>
                <ContentArea
                    header={ <Header /> }
                    content={ <MainMenu Context={Context} /> }
                    footer={<Footer />}
                />
                <Router />
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