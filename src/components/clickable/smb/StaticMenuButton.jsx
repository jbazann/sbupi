import styles from "./StaticMenuButton.module.css";
import global from "../../menu/MenuContainer.module.css";
import MenuContainer from "../../menu/MenuContainer.jsx";
import ThiccButton from "../ThiccButton.jsx";
import {devLog, getScopedId} from "../../../lib/common.js";
import {nav, pop, setRoutes} from "../../../lib/routing.js";
import {clientOnly} from "vike-react/clientOnly";
import {eugh} from "../../../lib/translation.js";
import {lang} from "../../../lib/environment.js";

const Script = clientOnly(() => import('./StaticMenuButtonScript.jsx'));

export const
    onBtn = 'on_button',
    offBtn = 'off_button',
    onState = 'on_state',
    offState =  'off_state',
    subState = 'submenu_state'

export default function StaticMenuButton({children, label, scope, outerScope, disabled, clean = false, routes, parentRoute, translationKey}) {
    let id = getScopedId(scope)
    if (routes) {
        devLog({parentRoute,routes,from: parentRoute || 'root'}, class RouteRegister{}.prototype)
        setRoutes(routes,id(onBtn),parentRoute || 'root')
    } else {
        routes = [label]
    }

    devLog({label, onBtn: id(onBtn), scope}, class SMBRender{}.prototype)
    return <>
        <div className="contents">
            <input type="radio" id={id(subState)} name={scope} className={`${styles.subRadio} ${global.submenuOnToggle}`}/>
            <input type="radio" id={id(onState)} name={scope} className={`${styles.onRadio} ${global.submenuOnToggle}`}/>
            <input type="radio" id={id(offState)} name={scope} className={styles.offRadio} defaultChecked/>
            <div className={styles.contentDiv}>
                <MenuContainer clean={clean} >
                    {children}
                </MenuContainer>
            </div>
            <ThiccButton id={id(offBtn)} classes={styles.closeButton}
                         translationKey={'misc.back'}
                action={pop}>
                {eugh(lang,'misc.back',"Back")}</ThiccButton>
            <ThiccButton disabled={disabled} id={id(onBtn)} classes={styles.openButton}
                         translationKey={translationKey}
                         action={() => nav(routes[0],parentRoute || 'root')}>
                {eugh(lang,translationKey,label)}</ThiccButton>
        </div>
        <Script fallback='' scope={scope} outerScope={outerScope} />
    </>
}