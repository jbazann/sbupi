import styles from './Settings.module.css'
import {getScopedId} from "../../../lib/common.js";
import Options from "./options/Options.jsx";
import {Option} from "./options/Options.jsx"


export default function Language({scope}) {
    const id = getScopedId(scope)
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options scope={id('language_options')}
                     options={Option.group(id('language_group'), [
                "English",
            ])}/>
            <div className="hr"></div>
        </div>
    </>
};