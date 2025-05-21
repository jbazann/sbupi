import StaticMenuButton from "@c/layout/control/StaticMenuButton.server.jsx";
import Language from "./Language.server.jsx";
import Style from "./Style.server.jsx";
import CookiesServer from "./Cookies.server.jsx";
import Theme from "./Theme.server.jsx";

export default function SettingsMenu() {
    return <>
        <StaticMenuButton key="SettingsMenu" label={"Settings"}
                          labelId={'root.mainMenu.settings.button'}
                          routes={['settings']} >
            <StaticMenuButton key="language" label={"Language"}
                              labelId={'root.settingsMenu.language'}
                              routes={['language']}
                              parentRoute={'settings'}
                              clean={true} >
                <Language />
            </StaticMenuButton>
            <StaticMenuButton key="theme" label={"Theme"}
                              labelId={'root.settingsMenu.theme'}
                              routes={['theme']}
                              parentRoute={'settings'}
                              clean={true} >
                <Theme />
            </StaticMenuButton>
            <StaticMenuButton key="style" label={"Style"}
                              labelId={'root.settingsMenu.style'}
                              routes={['style']}
                              parentRoute={'settings'}
                              clean={true} >
                <Style />
            </StaticMenuButton>
            <StaticMenuButton key="cookies" label={"Cookies"}
                              routes={['cookies']}
                              parentRoute={'settings'}
                              clean={true} >
                <CookiesServer />
            </StaticMenuButton>
        </StaticMenuButton>
    </>
}