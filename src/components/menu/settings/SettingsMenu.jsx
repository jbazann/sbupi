import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import Language from "./Language.jsx";
import Style from "./Style.jsx";
import Cookies from "./Cookies.jsx";
import {getGlobalId, getIdScope} from "../../../lib/common.js";
import {clientOnly} from "vike-react/clientOnly";

const Script = clientOnly(() => import('./SettingsMenuScript.jsx'))
const Theme = clientOnly(() => import('./Theme.jsx'))

export const scope = getGlobalId(),
    language = getGlobalId(),
    theme = getGlobalId(),
    cookies = getGlobalId(),
    style = getGlobalId()

export default function SettingsMenu() {
    const id = getIdScope(scope)
    return <>
        <StaticMenuButton key={id()} label={"Settings"}
                          routes={['settings']}
                          scope={scope} >
            <StaticMenuButton key={id()} label={"Language"}
                              routes={['language']}
                              parentRoute={'settings'}
                              scope={language}
                              outerScope={scope} clean={true} >
                <Language />
            </StaticMenuButton>
            <StaticMenuButton key={id()} label={"Theme"}
                              routes={['theme']}
                              parentRoute={'settings'}
                              scope={theme}
                              outerScope={scope} clean={true} >
                <Theme />
            </StaticMenuButton>
            <StaticMenuButton key={id()} label={"Style"}
                              routes={['style']}
                              parentRoute={'settings'}
                              scope={style}
                              outerScope={scope} clean={true} >
                <Style />
            </StaticMenuButton>
            <StaticMenuButton key={id()} label={"Cookies"}
                              routes={['cookies']}
                              parentRoute={'settings'}
                              scope={cookies}
                              outerScope={scope} clean={true} >
                <Cookies />
            </StaticMenuButton>
            <Script fallback="" />
        </StaticMenuButton>
    </>
}