import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import Language from "./Language.jsx";
import Style from "./Style.jsx";
import Cookies from "./Cookies.jsx";
import {getGlobalId, getScopedId} from "../../../lib/common.js";
import {clientOnly} from "vike-react/clientOnly";
import Theme from "./Theme.jsx";

const Script = clientOnly(() => import('./SettingsMenuScript.jsx'))

export default function SettingsMenu({scope}) {
    const id = getScopedId(scope)
    return <>
        <StaticMenuButton key={id('key0')} label={"Settings"}
                          routes={['settings']}
                          scope={id('settings_button')} >
            <StaticMenuButton key={id('key1')} label={"Language"}
                              routes={['language']}
                              parentRoute={'settings'}
                              scope={id('language_button')}
                              outerScope={id('settings_button')} clean={true} >
                <Language scope={id('language_menu')} />
            </StaticMenuButton>
            <StaticMenuButton key={id('key2')} label={"Theme"}
                              routes={['theme']}
                              parentRoute={'settings'}
                              scope={id('theme_button')}
                              outerScope={id('settings_button')} clean={true} >
                <Theme scope={id('theme_menu')} />
            </StaticMenuButton>
            <StaticMenuButton key={id('key3')} label={"Style"}
                              routes={['style']}
                              parentRoute={'settings'}
                              scope={id('style_button')}
                              outerScope={id('settings_button')} clean={true} >
                <Style scope={id('style_menu')} />
            </StaticMenuButton>
            <StaticMenuButton key={id('key4')} label={"Cookies"}
                              routes={['cookies']}
                              parentRoute={'settings'}
                              scope={id('cookies_button')}
                              outerScope={id('settings_button')} clean={true} >
                <Cookies scope={id('cookie_menu')} />
            </StaticMenuButton>
            <Script fallback="" />
        </StaticMenuButton>
    </>
}