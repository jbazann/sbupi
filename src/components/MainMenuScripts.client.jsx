import placeholders from './main-menu.module.css'
import FastMenuButtonScript from "./FastMenuButtonScript.jsx";

export default function MainMenuScripts() {
    const fmb = document.querySelectorAll('.'+placeholders.fastMenuButtonScript)

    return <>{[...fmb].map((b) => <FastMenuButtonScript
        key={b.getAttribute('data-id')}
        id={b.getAttribute('data-id')}
        outerId={b.getAttribute('data-outerid')}
    />)}</>
};