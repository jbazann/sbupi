import styles from "./StaticMenuButton.module.css";
import global from "../../menu/MenuContainer.module.css";
import MenuContainer from "../../menu/MenuContainer.server.jsx";
import ActionButton, {kinds} from "../ActionButton.server.jsx";
import {devLog, ids} from "../../../lib/common.js";
import {setRoutes} from "../../../lib/routing.js";
import {useContext} from "react";
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";

// TODO review parameter 'clean'
export default function StaticMenuButton({children, disabled, clean = false, routes, parentRoute, labelId, label, Context}) {
    const [ onBtn, offBtn, subState, onState, offState, radioGroupName ] =
        ids(6)
    const context = useContext(Context) || {}
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
                <Context value={{onBtn, subState, onState, parentContext: context}}>
                    <MenuContainer clean={clean} >
                        {children}
                    </MenuContainer>
                </Context>
            </div>
            <ActionButton id={offBtn} classes={styles.closeButton}
                          translationKey={'misc.back'}
                          kind={kinds.BackNav}>
                Back
            </ActionButton>
            <ActionButton disabled={true} id={onBtn} classes={styles.openButton}
                          translationKey={labelId}
                          kind={kinds.ForwardNav}
                          data={{route: routes[0], parentRoute: parentRoute || 'root'}}>
                {label}
            </ActionButton>
            <HydrationRoot comp={placeholders.StaticMenuButtonScript}
                           data={{
                               onBtn, offBtn, onState, offState,
                               parentSubState: context.subState,
                               parentOnState: context.onState,
                               disabled
                           }}/>
        </div>
    </>
}