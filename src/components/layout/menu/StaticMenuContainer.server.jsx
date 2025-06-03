import styles from "./StaticMenuContainer.module.css"
import {useContext} from "react";
import {MenuContext} from "@l/context.shared.js";
import {sid} from "@l/common.shared.js";
import StaticMenuButton from "@c/layout/menu/StaticMenuButton.server.jsx";
import {buttons,events} from "@c/layout/menu/StaticMenu.shared.js";

export default StaticMenuContainer

function StaticMenuContainer({children, bare=false}) {
    const context = useContext(MenuContext),
        forcedId = sid(context.id,buttons.off)

    if (context.isMainMenu) return <MainMenuContainer children={children} bare={bare} />

    return <>
        <div className={styles.containerContainer} role={"presentation"}>
            <div className={bare ? styles.bareContainer : styles.menuContainer}
                 role={bare ? "presentation" : "menu"} aria-owns={bare ? '' : forcedId}>
                {children}
            </div>
            {bare ?
                <div className={"contents"} role={"menu"}>
                    <BackButton id={context.id} forcedId={forcedId} />
                </div> :
                <BackButton id={context.id} forcedId={forcedId} />
            }
        </div>
    </>
}

function MainMenuContainer({children, bare}) {
    return <>
        <div className={bare ? styles.bareContainer : styles.menuContainer}
             role={bare ? "presentation" : "menu"}>
            {children}
        </div>
    </>
}

function BackButton({id,forcedId}) {
    return <StaticMenuButton id={id} forcedId={forcedId} label={'Back'} labelKey={'misc.back'}
                             kind={buttons.off}/>
}