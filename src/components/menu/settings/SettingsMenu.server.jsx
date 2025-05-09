import StaticMenuButton from "../../clickable/smb/StaticMenuButton.server.jsx";
import Language from "./Language.server.jsx";
import Style from "./Style.server.jsx";
import CookiesServer from "./Cookies.server.jsx";
import Theme from "./Theme.server.jsx";
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";

export default function SettingsMenu({Context}) {
    return <>
        <StaticMenuButton key="SettingsMenu" label={"Settings"}
                          translationKey={'root.mainMenu.settings.button'}
                          routes={['settings']}
                          Context={Context} >
            <StaticMenuButton key="language" label={"Language"}
                              translationKey={'root.settingsMenu.language.button'}
                              routes={['language']}
                              parentRoute={'settings'}
                              Context={Context} clean={true} >
                <Language />
            </StaticMenuButton>
            <StaticMenuButton key="theme" label={"Theme"}
                              translationKey={'root.settingsMenu.theme.button'}
                              routes={['theme']}
                              parentRoute={'settings'}
                              Context={Context} clean={true} >
                <Theme />
            </StaticMenuButton>
            <StaticMenuButton key="style" label={"Style"}
                              translationKey={'root.settingsMenu.style.button'}
                              routes={['style']}
                              parentRoute={'settings'}
                              Context={Context} clean={true} >
                <Style />
            </StaticMenuButton>
            <StaticMenuButton key="cookies" label={"Cookies"}
                              routes={['cookies']}
                              parentRoute={'settings'}
                              Context={Context} clean={true} >
                <CookiesServer />
            </StaticMenuButton>
            <HydrationRoot comp={placeholders.SettingsMenuScript}/>
        </StaticMenuButton>
    </>
}