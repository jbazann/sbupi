import styles from "./StaticMenuButton.module.css";
import global from "../../menu/MenuContainer.module.css";
import placeholders from "../../menu/main/MainMenu.module.css";
import MenuContainer from "../../menu/MenuContainer.jsx";
import ThiccButton from "../ThiccButton.jsx";
import {devLog, getIdScope} from "../../../lib/common.js";
import {nav, pop, setRoutes} from "../../../lib/routing.js";
import {clientOnly} from "vike-react/clientOnly";

const Script = clientOnly(() => import('./StaticMenuButtonScript.jsx'));

export const
    onBtn = 'on_button',
    offBtn = 'off_button',
    onState = 'on_state',
    offState =  'off_state',
    subState = 'submenu_state'

export default function StaticMenuButton({children, label, scope, outerScope, disabled, clean = false, routes, parentRoute}) {
    const id = getIdScope(scope)

    if (routes) {
        devLog({parentRoute,routes,from: parentRoute || 'root'}, class RouteRegister{}.prototype)
        setRoutes(routes,id(onBtn),parentRoute || 'root')
    } else {
        routes = [label]
    }

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
                action={pop}>
                Back</ThiccButton>
            <ThiccButton disabled={disabled} id={id(onBtn)} classes={styles.openButton}
                         action={() => nav(routes[0],parentRoute || 'root')}>
                {label}</ThiccButton>
        </div>
        <Script fallback='' scope={scope} outerScope={outerScope} />
    </>
}