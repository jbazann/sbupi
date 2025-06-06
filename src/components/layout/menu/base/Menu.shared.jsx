import {MenuContext} from "@l/context.shared.js";
import styles from "@c/layout/menu/base/Menu.module.css";
import MenuStateInputs from "@c/layout/menu/base/MenuStateInputs.shared.jsx";

export default Menu

function Menu({
                  children,
                  label = 'unlabeled',
                  routingKey,
                  id,
                  isMainMenu = false,
                  onRadio, offRadio, radioGroupName,
                  onRadioRef, offRadioRef,
}) {

    return <>
        <div data-menu={label} className="contents" >
            <MenuContext value={{id, isMainMenu}}>
                <MenuStateInputs offRadio={offRadio} onRadio={onRadio} radioGroupName={radioGroupName}
                                 offRadioRef={offRadioRef} onRadioRef={onRadioRef}
                                 offClass={styles.offRadio} onClass={styles.onRadio}
                                 routingKey={routingKey} isDefaultOn={isMainMenu} />
                <div className={styles.contentDiv} role="presentation" >
                    {children}
                </div>
            </MenuContext>
        </div>
    </>
}