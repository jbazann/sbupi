import styles from './CatMenu.module.css'
import {devLog, ids, sid} from "@l/common.shared.js";
import HydrationRoot from "@c/system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import {useContext} from "react";
import {translate} from "@l/translation.server.js";
import {Lang} from "@l/context.shared.js";
import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";
import BaseButton from "@c/layout/control/BaseButton.server.jsx";
import {buttons} from "@c/layout/menu/StaticMenu.shared.js";

export default CatMenu

function CatMenu({id,parentId,routingKey}) {
    const [loadingDiv, loadingP, catImg, anotherButton] =
        ids(4)
    const onBtn = sid(id,buttons.on)
    const lang = useContext(Lang)
    const loadingLabels = JSON.stringify([
        translate(lang, 'mainMenu.cat.loading.a') || "Fetching cats.",
        translate(lang, 'mainMenu.cat.loading.b') || "Fetching cats..",
        translate(lang, 'mainMenu.cat.loading.c') || "Fetching cats...",
    ])

    return <>
        <StaticMenu key="CatMenu" menu={"cat"}
                    id={id} parentId={parentId}
                    routingKey={routingKey}
                    bareContainer={true} >
            <div className="relative-container" role="presentation">
                <div className="absolute-underlay flex-col center-children" role="presentation">
                    <div id={loadingDiv} className="flex-col center-children" role="presentation">
                        <p id={loadingP} className={"center-self " + styles.loadingP}>
                            {translate(lang, 'mainMenu.cat.loading.a') || "Fetching cats."}
                        </p>
                    </div>
                    <div className={"flex-col center-self center-children " + styles.imageContainer} role="presentation">
                        <img id={catImg} src="/icon/waiting.gif"
                             alt={translate(lang, 'mainMenu.cat.img') || "A random cat image."}
                             className={"center-self " + styles.catImage}/>
                    </div>
                </div>
            </div>
            <BaseButton id={anotherButton} disabled={true}>
                {translate(lang, 'mainMenu.cat.another') || "Another!"}
            </BaseButton>
            <HydrationRoot comp={placeholders.CatMenuScript}
                           data={{
                               loadingDiv, loadingP, loadingLabels,
                               onBtn, anotherButton,
                               catImg
                           }}/>
        </StaticMenu>
    </>
};