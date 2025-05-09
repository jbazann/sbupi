import styles from "./StaticMenuButton.module.css";
import global from "../../menu/MenuContainer.module.css";
import MenuContainer from "../../menu/MenuContainer.server.jsx";
import ActionButton, {kinds} from "../ActionButton.server.jsx";
import {devLog, ids} from "../../../lib/common.js";
import {setRoutes} from "../../../lib/routing.js";
import {useContext} from "react";
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";
import translate from "../../../lib/translation.js";
import {Lang, MenuContext} from "../../../lib/context.js";

// TODO review parameter 'clean'
export default function StaticMenuButton({children, disabled, clean = false, routes, parentRoute, labelId, label}) {
    const [ onBtn, offBtn, subState, onState, offState, radioGroupName ] =
        ids(6)
    const lang = useContext(Lang) || {}
    const menuContext = useContext(MenuContext)
    if (routes) {
        setRoutes(routes,onBtn,parentRoute || 'root')
    }
    return <>
        <div className="contents">
            <input type="radio" id={subState} name={radioGroupName}
                   data-route-sub={routes}
                   className={`${styles.subRadio} ${global.submenuOnToggle}`}/>
            <input type="radio" id={onState} name={radioGroupName}
                   data-route={routes}
                   className={`${styles.onRadio} ${global.submenuOnToggle}`}/>
            <input type="radio" id={offState} name={radioGroupName}
                   data-route-off={routes}
                   className={styles.offRadio} defaultChecked/>
            <div className={styles.contentDiv}>
                <MenuContext value={{onBtn, subState, onState, parentContext: menuContext}}>
                    <MenuContainer clean={clean} >
                        {children}
                    </MenuContainer>
                </MenuContext>
            </div>
            <ActionButton id={offBtn} classes={styles.closeButton}
                          kind={kinds.BackNav}>
                {translate(lang,'misc.back') || "Back"}
            </ActionButton>
            <ActionButton disabled={true} id={onBtn} classes={styles.openButton}
                          translationKey={labelId}
                          kind={kinds.ForwardNav}
                          data={{route: routes[0], parentRoute: parentRoute || 'root'}}>
                {translate(lang,labelId) || label}
            </ActionButton>
            <HydrationRoot comp={placeholders.StaticMenuButtonScript}
                           data={{
                               onBtn, offBtn, onState, offState,
                               parentSubState: menuContext.subState,
                               parentOnState: menuContext.onState,
                               disabled
                           }}/>
        </div>
    </>
}