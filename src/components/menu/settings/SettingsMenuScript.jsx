import {useEffect} from "react";
import {get} from "../../../lib/localStore.js";

export default function SettingsMenuScript() {
    useEffect(() => {
        const theme = get('theme')
        if (theme) set('data-theme',theme)

        const themeVariant = get('theme-variant')
        if (themeVariant) set('data-theme-variant',themeVariant)
    });
};

function set(attr,val) {
    document.documentElement.setAttribute(attr, val);
}