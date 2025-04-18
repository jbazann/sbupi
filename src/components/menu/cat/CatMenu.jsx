import styles from './CatMenu.module.css'
import {clientOnly} from "vike-react/clientOnly";
import {getIdCounter} from "../../../lib/common.js";
import ThiccButton from "../../clickable/ThiccButton.jsx";

// TODO cleanup
export const
    catimg = 'catimg',
    another = 'anothercat',
    loadingDiv = 'loadingdiv',
    loadingP = 'loadingp'

const CatMenuScript = clientOnly(() => import('./CatMenuScript.jsx'))

export default function CatMenu({catButtonId}) {
    const id = getIdCounter(catButtonId)
    return <>
        <div className="relative-container">
            <div className="absolute-underlay flex-col center-children">
                <div id={id(loadingDiv)} className="flex-col center-children">
                    <p id={id(loadingP)} className={`center-self ${styles.loadingP}`}>Fetching cats.</p>
                </div>
                <div className={`flex-col center-self center-children ${styles.imageContainer}`}>
                    <img id={id(catimg)} src="/icon/waiting.gif" alt="A random cat image."
                         className={`center-self ${styles.catImage}`}/>
                </div>
            </div>
        </div>
        <ThiccButton id={id(another)} disabled={true}>Another!</ThiccButton>
        <CatMenuScript catButtonId={catButtonId} />
    </>
};
