import {useEffect} from "react";
import {nav, pop} from "../../lib/routing.js";

export default function ActionButtonScript({id,kind,data}) {
    switch(kind) {
        case 'ForwardNav': forwardNav(id,data); break;
        case 'BackNav': backNav(id,data); break;
        case 'Option': option(id,data); break;
    }
};

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