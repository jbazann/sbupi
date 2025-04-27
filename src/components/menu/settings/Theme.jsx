import styles from './Settings.module.css'
import {devLog, getScopedId} from "../../../lib/common.js";
import Options, {Option} from "./options/Options.jsx";
import {get, hasDoc, set, setDoc} from "../../../lib/stores.js";

export default function Theme({scope}) {
    const id = getScopedId(scope)
    return <>
        <div className={styles.container}>
            <div className="hr"></div>
            <Options scope={id('theme_options')}
                     options={Option.group(id('theme_group'), [
                {
                    label: "Default",
                    isDefault: shouldBeDefault('theme', 'default'),
                    action: () => _set('theme','default')},
            ])} title="Theme"/>
            <div className="hr2"></div>
            <Options scope={id('variabt_options')}
                     options={Option.group(id('variant_group'), [
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
    setDoc('data-'+key, val)
}

function initTheme() {
    if (!hasDoc('theme')) {
        _set('theme', 'default');
    }
}

function shouldBeDefault(key, val) {
    devLog({
        key, val, found: get(key,val)
    }, class DefaultThemeEval{}.prototype)
    return val && val === get(key, val)
}