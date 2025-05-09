import styles from './Settings.module.css'
import {ids} from "../../../lib/common.js";
import Options,{Option} from "./options/Options.server.jsx"
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";


export default function Language() {
    const [
        en, es, group
    ] = ids(3)
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options options={Option.group(group, [
                {label: "English", id: en, isDefault: true},
                {label: "Español", id: es, disabled: true}
            ])}/>
            <div className="hr"></div>
        </div>
        <HydrationRoot comp={placeholders.SettingsMenuScript} data={{
            setting: 'language',
            data: {
                en,es
            }
        }} />
    </>
};