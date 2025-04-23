import styles from './Settings.module.css'
import {getIdScope} from "../../../lib/common.js";
import Options from "./options/Options.jsx";
import {Option} from "./options/Options.jsx"

const id = getIdScope()

export default function Language() {
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options options={Option.group(id(), [
                "English",
            ])}/>
            <div className="hr"></div>
        </div>
    </>
};