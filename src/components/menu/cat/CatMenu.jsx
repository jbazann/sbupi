import styles from './CatMenu.module.css'
import {clientOnly} from "vike-react/clientOnly";
import {getGlobalId, getIdScope} from "../../../lib/common.js";
import ThiccButton from "../../clickable/ThiccButton.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";

export const scope = getGlobalId(),
    smb = 'smb',
    catImg = 'catimg',
    another = 'anothercat',
    loadingDiv = 'loadingdiv',
    loadingP = 'loadingp'

// const CatMenuScript = clientOnly(() => import('./CatMenuScript.jsx'))

export default function CatMenu() {
    const id = getIdScope(scope)
    return <>
        <StaticMenuButton key={id()} label={"Cat"} routes={['cat']}
                          id={id(smb)} >
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
            {/*<CatMenuScript scope={scope} />*/}
        </StaticMenuButton>
    </>
};
