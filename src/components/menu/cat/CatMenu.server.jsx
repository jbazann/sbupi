import styles from './CatMenu.module.css'
import {devLog, ids} from "../../../lib/common.js";
import ActionButton from "../../clickable/ActionButton.server.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.server.jsx";
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";
import ServerContextSerializer from "../../ServerContextSerializer.server.jsx";
import {useContext} from "react";
import translate from "../../../lib/translation.js";
import {Lang, MenuContext} from "../../../lib/context.js";

export default function CatMenu() {
    const [loadingDiv, loadingP, catImg, anotherButton, contextId] =
        ids(5)
    const lang = useContext(Lang)
    const loadingLabels = JSON.stringify([
        translate(lang, 'root.catMenu.loading.a') || "Fetching cats.",
        translate(lang, 'root.catMenu.loading.b') || "Fetching cats..",
        translate(lang, 'root.catMenu.loading.c') || "Fetching cats...",
    ])
    return <>
        <StaticMenuButton key="CatMenu" label={"Cat"}
                          labelId={'root.mainMenu.cat.button'}
                          routes={['cat']} >
            <div className="relative-container">
                <div className="absolute-underlay flex-col center-children">
                    <div id={loadingDiv} className="flex-col center-children">
                        <p id={loadingP} className={"center-self " + styles.loadingP}>
                            {translate(lang,'root.catMenu.loading.a') || "Fetching cats."}
                        </p>
                    </div>
                    <div className={"flex-col center-self center-children " + styles.imageContainer}>
                        <img id={catImg} src="/icon/waiting.gif" alt={translate(lang, 'root.catMenu.img') || "A random cat image."}
                             className={"center-self " + styles.catImage}/>
                    </div>
                </div>
            </div>
            <ActionButton id={anotherButton} disabled={true}>
                {translate(lang,'root.mainMenu.cat.another') || "Another!"}
            </ActionButton>
            <ServerContextSerializer id={contextId}
                                     Context={MenuContext}
                                     extractor={(context) => ({onBtn: context.onBtn})} />
            <HydrationRoot comp={placeholders.CatMenuScript}
                           data={{loadingDiv,loadingP,anotherButton,catImg,contextId,loadingLabels}} />
        </StaticMenuButton>
    </>
};