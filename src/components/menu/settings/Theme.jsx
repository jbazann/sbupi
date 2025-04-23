import styles from './Settings.module.css'
import {getIdScope} from "../../../lib/common.js";
import Options, {Option} from "./options/Options.jsx";
import {get, set} from "../../../lib/localStore.js";

const id = getIdScope()

export default function Theme() {
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options options={Option.group(id(), [
                {
                    label: "Default",
                    isDefault: shouldBeDefault('theme', 'default'),
                    action: () => _set('theme','default')},
            ])} title="Theme"/>
            <div className="hr2"></div>
            <Options options={Option.group(id(), [
                {
                    label: "Dark",
                    isDefault: shouldBeDefault('theme-variant', 'dark'),
                    action: () => {
                        initTheme()
                        _set('theme-variant', 'dark')
                    }
                },
                {
                    label: "Light",
                    isDefault: shouldBeDefault('theme-variant', 'light'),
                    action: () => {
                        initTheme()
                        _set('theme-variant', 'light')
                    }
                },
            ])} title="Variant"/>
            <div className="hr"></div>
        </div>
    </>
};

function _set(key, val) {
    set(key, val)
    document.documentElement.setAttribute('data-'+key, val)
}

function initTheme() {
    if (!document.documentElement.hasAttribute('theme')) {
        _set('theme', 'default');
    }
}

function shouldBeDefault(key, val) {
    return val && val === get(key, val)
}