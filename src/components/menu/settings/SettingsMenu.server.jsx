import Language from "./Language.server.jsx";
import Style from "./Style.server.jsx";
import CookiesServer from "./Cookies.server.jsx";
import Theme from "./Theme.server.jsx";
import ServerMenu from "@c/layout/menu/server/ServerMenu.server.jsx";
import {ids} from "@l/common.shared.js";
import ServerMenuButton from "@c/layout/menu/server/ServerMenuButton.server.jsx";

export default function SettingsMenu({id, parentId, routingKey, route}) {
    const [language, theme, style, cookies] = ids(4)
    return <>
        <ServerMenu key="SettingsMenu" label={"settings"}
                    routingKey={routingKey}
                    id={id} parentId={parentId} >
            <ServerMenuButton id={language} label={'Language'}
                              route={'language'} parentRoute={route}
                              labelKey={'mainMenu.settings.language.button'} />
            <ServerMenuButton id={theme} label={'Theme'}
                              route={'theme'} parentRoute={route}
                              labelKey={'mainMenu.settings.theme.button'} />
            <ServerMenuButton id={style} label={'Style'}
                              route={'style'} parentRoute={route}
                              labelKey={'mainMenu.settings.style.button'} />
            <ServerMenuButton id={cookies} label={'Cookies'}
                              route={'cookies'} parentRoute={route}
                              labelKey={'mainMenu.settings.cookies.button'} />
        </ServerMenu>
        <ServerMenu key="language" label={"language"}
                    routingKey={'language'}
                    id={language} parentId={id}  >
            <Language />
        </ServerMenu>
        <ServerMenu key="theme" label={"theme"}
                    labelId={'root.settingsMenu.theme'}
                    routingKey={'theme'}
                    id={theme} parentId={id} >
            <Theme />
        </ServerMenu>
        <ServerMenu key="style" label={"style"}
                    labelId={'root.settingsMenu.style'}
                    routingKey={'style'}
                    id={style} parentId={id} >
            <Style />
        </ServerMenu>
        <ServerMenu key="cookies" label={"cookies"}
                    bareContainer={true}
                    routingKey={'cookies'}
                    id={cookies} parentId={id} >
            <CookiesServer />
        </ServerMenu>
    </>
}