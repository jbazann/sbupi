import styles from "./StaticMenuButton.module.css";
import global from "../menu/MenuContainer.module.css";
import placeholders from "../menu/main/MainMenu.module.css";
import MenuContainer from "../menu/MenuContainer.jsx";
import ThiccButton from "../clickable/ThiccButton.jsx";
import {devLog, getIdCounter} from "../../lib/common.js";
import {nav, pop, setRoutes} from "../../lib/routing.js";

export const
    onBtn = 'on_button',
    offBtn = 'off_button',
    onState = 'on_state',
    offState =  'off_state',
    subState = 'submenu_state'

export default function StaticMenuButton({label, id, menu, outerId, disabled, clean = false, routes, parentRoute}) {
    const idFn = getIdCounter(id)
    if (routes) {
        devLog({parentRoute,routes,from: parentRoute || 'root'}, class RouteRegister{}.prototype)
        setRoutes(routes,idFn(onBtn),parentRoute || 'root')
    } else {
        routes = [label]
    }
    return <>
        <div className="contents">
            <input type="radio" id={idFn(subState)} name={id} className={`${styles.subRadio} ${global.submenuOnToggle}`}/>
            <input type="radio" id={idFn(onState)} name={id} className={`${styles.onRadio} ${global.submenuOnToggle}`}/>
            <input type="radio" id={idFn(offState)} name={id} className={styles.offRadio} defaultChecked/>
            <div className={styles.contentDiv}>
                <MenuContainer menu={menu} clean={clean}/>
            </div>
            <ThiccButton id={idFn(offBtn)} classes={styles.closeButton}
                action={pop}>
                Back</ThiccButton>
            <ThiccButton disabled={disabled} id={idFn(onBtn)} classes={styles.openButton}
                         action={() => nav(routes[0],parentRoute || 'root')}>
                {label}</ThiccButton>
        </div>
        <div data-id={id} data-outerid={outerId} className={placeholders.menuButtonScript}></div>
    </>
}