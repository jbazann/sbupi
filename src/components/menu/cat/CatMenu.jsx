import styles from './CatMenu.module.css'
import {devLog, getScopedId} from "../../../lib/common.js";
import ThiccButton from "../../clickable/ThiccButton.jsx";
import StaticMenuButton, {onBtn} from "../../clickable/smb/StaticMenuButton.jsx";
import {clientOnly} from "vike-react/clientOnly";

export const
    catImg = 'catimg',
    another = 'anothercat',
    loadingDiv = 'loadingdiv',
    loadingP = 'loadingp'

const CatMenuScript = clientOnly(() => import('./CatMenuScript.jsx'))

export default function CatMenu({scope}) {
    const id = getScopedId(scope)
    return <>
        <StaticMenuButton key={id('key1')} label={"Cat"}
                          routes={['cat']}
                          scope={scope} >
            <div className="relative-container">
                <div className="absolute-underlay flex-col center-children">
                    <div id={id(loadingDiv)} className="flex-col center-children">
                        <p id={id(loadingP)} className={`center-self ${styles.loadingP}`}>Fetching cats.</p>
                    </div>
                    <div className={`flex-col center-self center-children ${styles.imageContainer}`}>
                        <img id={id(catImg)} src="/icon/waiting.gif" alt="A random cat image."
                             className={`center-self ${styles.catImage}`}/>
                    </div>
                </div>
            </div>
            <ThiccButton id={id(another)} disabled={true}>Another!</ThiccButton>
            <CatMenuScript scope={scope} />
        </StaticMenuButton>
    </>
};