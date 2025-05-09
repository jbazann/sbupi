import styles from './Settings.module.css'
import {ids} from "../../../lib/common.js";
import Options,{Option} from "./options/Options.server.jsx"
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";
import {useContext} from "react";
import {Lang} from "../../../lib/context.js";


export default function Language() {
    const [
        en, es, group
    ] = ids(3)
    const lang = useContext(Lang)
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options options={Option.group(group, [
                {label: "English", id: en, isDefault: lang === 'en'},
                {label: "Español", id: es, isDefault: lang === 'es'}
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