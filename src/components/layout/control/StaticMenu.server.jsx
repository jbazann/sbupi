import styles from "./StaticMenu.module.css";
import global from "../../menu/MenuContainer.module.css";
import MenuContainer from "../../menu/MenuContainer.server.jsx";
import ActionButton, {kinds} from "./ActionButton.server.jsx";
import {devLog, ids} from "@l/common.shared.js";
import {setRoutes} from "@l/routing.shared.js";
import {useContext} from "react";
import HydrationRoot from "../../system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import {translate} from "@l/translation.server.js";
import {Lang, MenuContext} from "@l/context.shared.js";

export default StaticMenu

function StaticMenu({
                              children,
                              hasSubmenu = true,
                              disabled,
                              route,
                              parentRoute = 'root',
                              labelId,
                              label
}) {
    const [ onBtn, offBtn, subState, onState, offState, radioGroupName ] =
        ids(6)
    const lang = useContext(Lang)
    const menuContext = useContext(MenuContext)
    if (route) {
        setRoutes(route,onBtn,parentRoute)
    }
    // TODO back button is in the wrong menu div
    return <>
        <div data-label={label} className="contents" role="presentation" >
            <HiddenInputs offState={offState} onState={onState} subState={subState}
                          route={route} radioGroupName={radioGroupName} />
            <div className={styles.contentDiv} role="presentation" >
                { hasSubmenu ? (
                    <MenuContext value={{onBtn, subState, onState, offBtn, parentContext: menuContext}}>
                        <MenuContainer>
                            {children}
                        </MenuContainer>
                    </MenuContext>
                ) :
                    children
                }
            </div>
            <ActionButton id={offBtn} classes={styles.closeButton}
                          kind={kinds.BackNav}>
                {translate(lang,'misc.back') || "Back"}
            </ActionButton>
            <ActionButton disabled={disabled} id={onBtn} classes={styles.openButton}
                          translationKey={labelId}
                          kind={kinds.ForwardNav}
                          data={{route, parentRoute}}>
                {translate(lang,labelId) || label}
            </ActionButton>
            <HydrationRoot comp={placeholders.StaticMenuScript}
                           data={{
                               onBtn, offBtn, onState, offState,
                               parentSubState: menuContext.subState,
                               parentOnState: menuContext.onState
                           }}/>
        </div>
    </>
}

function HiddenInputs({subState,onState,offState,radioGroupName,route}) {
    return <>
        <input type="radio" id={subState} name={radioGroupName}
               data-route-sub={route}
               className={`${styles.subRadio} ${global.submenuOnToggle}`}/>
        <input type="radio" id={onState} name={radioGroupName}
               data-route={route}
               className={`${styles.onRadio} ${global.submenuOnToggle}`}/>
        <input type="radio" id={offState} name={radioGroupName}
               data-route-off={route}
               className={styles.offRadio} defaultChecked/>
    </>
}