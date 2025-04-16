import styles from './CatMenu.module.css'
import {id} from "../../lib/common.js";
import {clientOnly} from "vike-react/clientOnly";

// TODO cleanup

const
    catimg = id(),
    another = id(),
    loadingDiv = id(),
    loadingP = id()
const CatMenuScript = clientOnly(() => import('./CatMenuScript.jsx'))

export default function CatMenu({catButtonId}) {
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
        <button id={id(another)} disabled className={`menu-button`} >Another!</button>
        <CatMenuScript anotherButtonId={id(another)} loadingP={id(loadingP)} loadingDiv={id(loadingDiv)} catButtonId={catButtonId} />
    </>
};
