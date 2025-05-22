import styles from "./StaticMenuButton.module.css";
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

export default StaticMenuButton

// TODO review parameter 'clean'
function StaticMenuButton({
                              children,
                              disabled,
                              clean = false,
                              routes,
                              parentRoute,
                              labelId,
                              label
}) {
    const [ onBtn, offBtn, subState, onState, offState, radioGroupName ] =
        ids(6)
    const lang = useContext(Lang)
    const menuContext = useContext(MenuContext)
    if (routes) {
        setRoutes(routes,onBtn,parentRoute || 'root')
    }
    return <>
        <div data-menu={label} className="contents">
            <HiddenInputs offState={offState} onState={onState} subState={subState}
                          routes={routes} radioGroupName={radioGroupName} />
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
            <ActionButton disabled={disabled} id={onBtn} classes={styles.openButton}
                          translationKey={labelId}
                          kind={kinds.ForwardNav}
                          data={{route: routes[0], parentRoute: parentRoute || 'root'}}>
                {translate(lang,labelId) || label}
            </ActionButton>
            <HydrationRoot comp={placeholders.StaticMenuButtonScript}
                           data={{
                               onBtn, offBtn, onState, offState,
                               parentSubState: menuContext.subState,
                               parentOnState: menuContext.onState
                           }}/>
        </div>
    </>
}

function HiddenInputs({subState,onState,offState,radioGroupName,routes}) {
    // MDN states that aria-hidden should not be necessary
    // on elements hidden by display: none or visibility: hidden,
    // NVDA's screen reader still reads these despite both
    // of the above properties being present, and devtools'
    // accessibility tree showing the elements are effectively removed.
    // I presume it's because they are inputs.
    // I could only manage to hide them from the reader
    // by also using tabIndex=-1 and aria-hidden.
    return <>
        <input type="radio" id={subState} name={radioGroupName}
               tabIndex={-1}
               aria-hidden={true}
               data-route-sub={routes}
               className={`${styles.subRadio} ${global.submenuOnToggle}`}/>
        <input type="radio" id={onState} name={radioGroupName}
               tabIndex={-1}
               aria-hidden={true}
               data-route={routes}
               className={`${styles.onRadio} ${global.submenuOnToggle}`}/>
        <input type="radio" id={offState} name={radioGroupName}
               tabIndex={-1}
               aria-hidden={true}
               data-route-off={routes}
               className={styles.offRadio} defaultChecked/>
    </>
}