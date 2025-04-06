import placeholders from './MainMenu.module.css'
import FastMenuButtonScript from "./fmb/FastMenuButtonScript.jsx";

export default function MainMenuScripts() {
    const fmb = document.querySelectorAll('.'+placeholders.fastMenuButtonScript)

    return <>{[...fmb].map((b) => <FastMenuButtonScript
        key={b.getAttribute('data-id')}
        id={b.getAttribute('data-id')}
        outerId={b.getAttribute('data-outerid')}
    />)}</>
};