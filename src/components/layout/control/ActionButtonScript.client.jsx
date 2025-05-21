import {useEffect} from "react";
import {nav, pop} from "@l/routing.shared.js";

export default function ActionButtonScript({id,kind,data}) {
    switch(kind) {
        case 'ForwardNav': forwardNav(id,data); break
        case 'BackNav': backNav(id,data); break
        case 'Option': option(id,data); break
        case 'Cookie': cookie(id, data); break
        case 'Refresh': refresh(id, data); break
        case 'Attribute': attribute(id, data); break
    }
};

function cookie(id, data) {
    option(id, data)
    useEffect(() => {
        let handler,
            button = document.getElementById(id);
        button?.addEventListener('click', handler = (e) => {
            setUnsafeCookie(data?.cookie,data?.value)
        })
        return () => {
            button?.removeEventListener('click', handler)
        }
    })
}

function setUnsafeCookie(key,value) {
    const year = 31536000
    document.cookie = `${key}=${value}; Path=/; Secure; SameSite=None; Max-Age=${12*year};`
}

function refresh(id, data) {
    useEffect(() => {
        let handler,
            button = document.getElementById(id);
        button?.addEventListener('click', handler = (e) => {
            location.replace(data?.url || '/')
        })
        return () => {
            button?.removeEventListener('click', handler)
        }
    })
}

function attribute(id, data) {
    option(id, data)
    useEffect(() => {
        let handler,
            button = document.getElementById(id);
        button?.addEventListener('click', handler = (e) => {
            document.documentElement.setAttribute(data?.attribute,data?.value)
            if (data?.cookie) setUnsafeCookie(data?.cookie,data?.value)
        })

        // Mark the input as checked if SSR already set this button's attribute value
        if (data?.value && document.documentElement.getAttribute(data?.attribute) === data?.value) {
            const input = document.getElementById(data?.inputId)
            if (input) input.checked = true
        }

        return () => {
            button?.removeEventListener('click', handler)
        }
    })
}

function forwardNav(id,data) {
    useEffect(() => {
        let handler,
            button = document.getElementById(id);
        button?.addEventListener('click', handler = (e) => {
            nav(data?.route,data?.parentRoute)
        })
        return () => {
            button?.removeEventListener('click', handler)
        }
    })
}

function backNav(id) {
    useEffect(() => {
        const button = document.getElementById(id)
        button?.addEventListener("click", pop);
        return () => {
            button?.removeEventListener("click", pop);
        }
    })
}

function option(id,data) {
    useEffect(() => {
        let handler,
            button = document.getElementById(id),
            input = document.getElementById(data?.inputId)
        button?.addEventListener('click', handler = (e) => {
            input?.click()
        })
        return () => {
            button?.removeEventListener('click', handler)
        }
    });
}