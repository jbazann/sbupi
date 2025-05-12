import styles from './Settings.module.css'
import {ids} from "@/lib/common.js";
import Options,{Option} from "./options/Options.server.jsx"
import HydrationRoot from "@c/client/HydrationRoot.server.jsx";
import {placeholders} from "@/lib/placeholders.shared.js";
import {useContext} from "react";
import {Lang} from "@/lib/context.js";
import {kinds} from "@c/clickable/ActionButton.server.jsx";


export default function Language({url = '/settings/language'}) {
    const [
        en, es, group
    ] = ids(3)
    const lang = useContext(Lang)
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options refresh={true} url={url} options={Option.group(group, [
                {label: "English", id: en, isDefault: lang === 'en',
                    kind: kinds.Cookie, data:{cookie: 'lang', value: 'en'}},
                {label: "Español", id: es, isDefault: lang === 'es',
                    kind: kinds.Cookie, data:{cookie: 'lang', value: 'es'}}
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