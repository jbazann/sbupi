import styles from "./StaticMenu.module.css";
import StaticMenuContainer from "./StaticMenuContainer.server.jsx";
import {devLog, sids} from "@l/common.shared.js";
import HydrationRoot from "../../system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import {MenuContext} from "@l/context.shared.js";
import {radios} from "@c/layout/menu/StaticMenu.shared.js";

export default StaticMenu

function StaticMenu({
                        children,
                        menu = 'unlabeled',
                        routingKey,
                        id,
                        parentId,
                        isMainMenu = false,
                        bareContainer = false
}) {
    const [ onRadio, offRadio, radioGroupName ] =
        sids(id, [radios.on,radios.off,radios.group])
    const [ parentOnRadio, parentOffRadio ] =
        (parentId && sids(parentId, [radios.on, radios.off])) ?? ['','']

    return <>
        <div data-menu={menu} className="contents" >
            <MenuContext value={{id, isMainMenu}}>
                <HiddenInputs offRadio={offRadio} onRadio={onRadio} radioGroupName={radioGroupName}
                              routingKey={routingKey}
                              isDefaultOn={isMainMenu} />
                <div className={styles.contentDiv} role="presentation" >
                    <StaticMenuContainer bare={bareContainer}>
                        {children}
                    </StaticMenuContainer>
                </div>
                {isMainMenu ? null :
                    <HydrationRoot comp={placeholders.StaticMenuScript}
                                   metadata={StaticMenu.name}
                                   data={{
                                       id,
                                       onRadio, offRadio,
                                       parentOnRadio, parentOffRadio
                                   }}/>
                }
            </MenuContext>
        </div>
    </>
}

function HiddenInputs({onRadio,offRadio,radioGroupName,isDefaultOn,routingKey}) {
    return <>
        <input type="radio" id={onRadio} name={radioGroupName}
               data-route={routingKey}
               defaultChecked={isDefaultOn}
               className={`${styles.onRadio}`} />
        <input type="radio" id={offRadio} name={radioGroupName}
               data-route-off={routingKey}
               defaultChecked={!isDefaultOn}
               className={styles.offRadio} />
    </>
}