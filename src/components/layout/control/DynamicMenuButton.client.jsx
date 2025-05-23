import styles from "./StaticMenu.module.css";
import global from "@c/menu/MenuContainer.module.css";
import MenuContainer from "@c/menu/MenuContainer.server.jsx";
import ActionButton, {kinds} from "./ActionButton.server.jsx";
import {devLog, ids} from "@l/common.shared.js";
import {useContext} from "react";
import {translate} from "@l/translation.server.js";
import {Lang, MenuContext} from "@l/context.shared.js";
import DynamicMenuButtonScript from "@c/layout/control/DynamicMenuButtonScript.client.jsx";

// TODO review parameter 'clean'
export default function DynamicMenuButton({children, disabled, clean = false, routes, parentRoute, labelId, label}) {
    const [ onBtn, offBtn, subState, onState, offState, radioGroupName ] =
        ids(6)
    const lang = useContext(Lang) || {lang: 'en'}
    const menuContext = useContext(MenuContext)
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
            <DynamicMenuButtonScript {...{
                onBtn, offBtn, onState, offState,
                parentSubState: menuContext.subState,
                parentOnState: menuContext.onState,
                disabled
            }} />
        </div>
    </>
}