import styles from './Settings.module.css'
import {devLog, ids} from "../../../lib/common.js";
import Options, {Option} from "./options/Options.server.jsx";
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";
import translate from "../../../lib/translation.js";
import {useContext} from "react";
import {Lang} from "../../../lib/context.js";

export default function Theme() {
    const [
        theme, darkThmId, lightThmId, variant, defVrntId
    ] = ids(5)
    const lang = useContext(Lang)
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options title={translate(lang,'theme.titles.theme') || "Theme"}
                     options={Option.group(theme, [
                {
                    label: translate(lang, 'theme.default') || "Default",
                    id: defVrntId
                }
            ])} />
            <div className="hr2"></div>
            <Options title={translate(lang,'theme.titles.variant') || "Variant"}
                     options={Option.group(variant, [
                {
                    label: translate(lang,'theme.dark') || "Dark",
                    id: darkThmId
                },
                {
                    label: translate(lang,'theme.light') || "Light",
                    id: lightThmId
                },
            ])} />
            <div className="hr"></div>
        </div>
        <HydrationRoot comp={placeholders.SettingsMenuScript} data={{setting: 'theme', data: {
            dark: darkThmId,
            light: lightThmId,
            defV: defVrntId,
        }}} />
    </>
};