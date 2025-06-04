import Language from "./Language.server.jsx";
import Style from "./Style.server.jsx";
import CookiesServer from "./Cookies.server.jsx";
import Theme from "./Theme.server.jsx";
import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";
import {ids} from "@l/common.shared.js";
import StaticMenuButton from "@c/layout/menu/StaticMenuButton.server.jsx";

export default function SettingsMenu({id, parentId, routingKey, route}) {
    const [language, theme, style, cookies] = ids(4)
    return <>
        <StaticMenu key="SettingsMenu" menu={"settings"}
                    routingKey={routingKey}
                    id={id} parentId={parentId} >
            <StaticMenuButton id={language} label={'Language'}
                              route={'language'} parentRoute={route}
                              labelKey={'mainMenu.settings.language.button'} />
            <StaticMenuButton id={theme} label={'Theme'}
                              route={'theme'} parentRoute={route}
                              labelKey={'mainMenu.settings.theme.button'} />
            <StaticMenuButton id={style} label={'Style'}
                              route={'style'} parentRoute={route}
                              labelKey={'mainMenu.settings.style.button'} />
            <StaticMenuButton id={cookies} label={'Cookies'}
                              route={'cookies'} parentRoute={route}
                              labelKey={'mainMenu.settings.cookies.button'} />
        </StaticMenu>
        <StaticMenu key="language" menu={"language"}
                    routingKey={'language'}
                    id={language} parentId={id}  >
            <Language />
        </StaticMenu>
        <StaticMenu key="theme" menu={"theme"}
                    labelId={'root.settingsMenu.theme'}
                    routingKey={'theme'}
                    id={theme} parentId={id} >
            <Theme />
        </StaticMenu>
        <StaticMenu key="style" menu={"style"}
                    labelId={'root.settingsMenu.style'}
                    routingKey={'style'}
                    id={style} parentId={id} >
            <Style />
        </StaticMenu>
        <StaticMenu key="cookies" menu={"cookies"}
                    bareContainer={true}
                    routingKey={'cookies'}
                    id={cookies} parentId={id} >
            <CookiesServer />
        </StaticMenu>
    </>
}