import styles from './Settings.module.css'
import {devLog, ids} from "../../../lib/common.js";
import Options, {Option} from "./options/Options.server.jsx";
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";
import translate from "../../../lib/translation.js";
import {useContext} from "react";
import {Lang} from "../../../lib/context.js";
import {kinds} from "@c/clickable/ActionButton.server.jsx";

export default function Theme() {
    const [
        theme, darkVarId, lightVarId, variant, defThmId
    ] = ids(5)
    const lang = useContext(Lang)
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options title={translate(lang,'theme.titles.theme') || "Theme"}
                     options={Option.group(theme, [
                {
                    label: translate(lang, 'theme.default') || "Default",
                    id: defThmId,
                    kind: kinds.Attribute,
                    data:{
                        attribute: 'data-theme',
                        cookie: 'theme',
                        value: 'default'
                    },
                    isDefault: true
                }
            ])} />
            <div className="hr2"></div>
            <Options title={translate(lang,'theme.titles.variant') || "Variant"}
                     options={Option.group(variant, [
                {
                    label: translate(lang,'theme.dark') || "Dark",
                    id: darkVarId,
                    kind: kinds.Attribute,
                    data:{
                        attribute: 'data-theme-variant',
                        cookie: 'theme-variant',
                        value: 'dark'
                    }
                },
                {
                    label: translate(lang,'theme.light') || "Light",
                    id: lightVarId,
                    kind: kinds.Attribute,
                    data:{
                        attribute: 'data-theme-variant',
                        cookie: 'theme-variant',
                        value: 'light'
                    }
                },
            ])} />
            <div className="hr"></div>
        </div>
        <HydrationRoot comp={placeholders.SettingsMenuScript} data={{setting: 'theme', data: {
            dark: darkVarId,
            light: lightVarId,
            defV: defThmId,
        }}} />
    </>
};