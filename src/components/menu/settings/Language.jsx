import styles from './Settings.module.css'
import {getIdCounter} from "../../../lib/common.js";
import Options from "./options/Options.jsx";
import {Option} from "./options/Options.jsx"

const id = getIdCounter()

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