import Language from "./Language.server.jsx";
import Style from "./Style.server.jsx";
import CookiesServer from "./Cookies.server.jsx";
import Theme from "./Theme.server.jsx";
import StaticMenu from "@c/layout/control/StaticMenu.server.jsx";

export default function SettingsMenu() {
    return <>
        <StaticMenu key="SettingsMenu" label={"Settings"}
                    labelId={'root.mainMenu.settings.button'}
                    route={'settings'} >
            <StaticMenu key="language" label={"Language"}
                        labelId={'root.settingsMenu.language'}
                        route={'language'}
                        parentRoute={'settings'} >
                <Language />
            </StaticMenu>
            <StaticMenu key="theme" label={"Theme"}
                        labelId={'root.settingsMenu.theme'}
                        route={'theme'}
                        parentRoute={'settings'} >
                <Theme />
            </StaticMenu>
            <StaticMenu key="style" label={"Style"}
                        labelId={'root.settingsMenu.style'}
                        route={'style'}
                        parentRoute={'settings'} >
                <Style />
            </StaticMenu>
            <StaticMenu key="cookies" label={"Cookies"}
                        route={'cookies'}
                        hasSubmenu={false}
                        parentRoute={'settings'} >
                <CookiesServer />
            </StaticMenu>
        </StaticMenu>
    </>
}