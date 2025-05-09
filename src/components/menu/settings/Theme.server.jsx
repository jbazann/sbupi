import styles from './Settings.module.css'
import {devLog, ids} from "../../../lib/common.js";
import Options, {Option} from "./options/Options.server.jsx";
import HydrationRoot from "../../client/HydrationRoot.server.jsx";
import {placeholders} from "../../../lib/placeholders.shared.js";

export default function Theme() {
    const [
        theme, darkThmId, lightThmId, variant, defVrntId
    ] = ids(5)
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options title="Theme"
                     options={Option.group(theme, [
                {
                    label: "Default",
                    id: defVrntId
                }
            ])} />
            <div className="hr2"></div>
            <Options title="Variant"
                     options={Option.group(variant, [
                {
                    label: "Dark",
                    id: darkThmId
                },
                {
                    label: "Light",
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