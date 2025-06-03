import Language from "./Language.server.jsx";
import Style from "./Style.server.jsx";
import CookiesServer from "./Cookies.server.jsx";
import Theme from "./Theme.server.jsx";
import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";
import {ids} from "@l/common.shared.js";
import StaticMenuButton from "@c/layout/menu/StaticMenuButton.server.jsx";

export default function SettingsMenu({id, parentId}) {
    const [language, theme, style, cookies] = ids(4)
    return <>
        <StaticMenu key="SettingsMenu" menu={"settings"}
                    id={id} parentId={parentId} >
            <StaticMenuButton id={language} label={'Language'}
                              labelKey={'mainMenu.settings.language.button'} />
            <StaticMenuButton id={theme} label={'Theme'}
                              labelKey={'mainMenu.settings.theme.button'} />
            <StaticMenuButton id={style} label={'Style'}
                              labelKey={'mainMenu.settings.style.button'} />
            <StaticMenuButton id={cookies} label={'Cookies'}
                              labelKey={'mainMenu.settings.cookies.button'} />
        </StaticMenu>
        <StaticMenu key="language" menu={"language"}
                    id={language} parentId={id}  >
            <Language />
        </StaticMenu>
        <StaticMenu key="theme" menu={"theme"}
                    labelId={'root.settingsMenu.theme'}
                    id={theme} parentId={id} >
            <Theme />
        </StaticMenu>
        <StaticMenu key="style" menu={"style"}
                    labelId={'root.settingsMenu.style'}
                    id={style} parentId={id} >
            <Style />
        </StaticMenu>
        <StaticMenu key="cookies" menu={"cookies"}
                    bareContainer={true}
                    id={cookies} parentId={id} >
            <CookiesServer />
        </StaticMenu>
    </>
}