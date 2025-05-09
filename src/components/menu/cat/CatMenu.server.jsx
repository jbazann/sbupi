import styles from './CatMenu.module.css'
import {devLog, ids} from "../../../lib/common.js";
import ActionButton from "../../clickable/ActionButton.server.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.server.jsx";
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";
import ServerContextSerializer from "../../ServerContextSerializer.server.jsx";

export default function CatMenu({Context}) {
    const [loadingDiv, loadingP, catImg, anotherButton, contextId] =
        ids(5)
    return <>
        <StaticMenuButton key="CatMenu" label={"Cat"}
                          labelId={'root.mainMenu.cat.button'}
                          routes={['cat']}
                          Context={Context} >
            <div className="relative-container">
                <div className="absolute-underlay flex-col center-children">
                    <div id={loadingDiv} className="flex-col center-children">
                        <p id={loadingP} className={"center-self " + styles.loadingP}>
                            Fetching cats.
                        </p>
                    </div>
                    <div className={"flex-col center-self center-children " + styles.imageContainer}>
                        <img id={catImg} src="/icon/waiting.gif" alt="A random cat image."
                             className={"center-self " + styles.catImage}/>
                    </div>
                </div>
            </div>
            <ActionButton id={anotherButton} translationKey={'root.mainMenu.cat.another'}
                          disabled={true}>
                Another!
            </ActionButton>
            <ServerContextSerializer id={contextId}
                                     Context={Context}
                                     extractor={(context) => ({onBtn: context.onBtn})} />
            <HydrationRoot comp={placeholders.CatMenuScript}
                           data={{loadingDiv,loadingP,anotherButton,catImg,contextId}} />
        </StaticMenuButton>
    </>
};