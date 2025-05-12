import {useEffect} from "react";
import {get, getDoc} from "@/lib/stores.js";
import {settings} from "@/lib/enum.js";

export default function SettingsMenuScript({setting,data}) {
    switch (setting) {
        case 'theme': theme(data); break
        case 'language': language(data); break
    }
};

function language(data) {
    useEffect(() => {
        const language = getDoc(settings.lang.attr)
        if (language) {
            let input, id
            switch (language) {
                case 'en': id = data.en; break
                case 'es': id = data.es; break
            }
            if ((input = _get(id))) input.checked = true
        }
    })
}

function theme(data) {
    useEffect(() => {
        const theme = getDoc(settings.theme.attr)
        if (theme) {
            let input, id
            switch (theme) {
                case 'dark': id = data.dark; break
                case 'light': id = data.light; break
            }
            if ((input = _get(id))) input.checked = true
        }
    })
    useEffect(() => {
        const themeVariant = getDoc(settings.theme.variant.attr)
        if (themeVariant) {
            let input, id
            switch (themeVariant) {
                case 'default': id = data.defV; break
            }
            if ((input = _get(id))) input.checked = true
        }
    })
}


function set(attr,val) {
    document.documentElement.setAttribute(attr, val)
}

function _get(id) {
    return document.getElementById(id)
}