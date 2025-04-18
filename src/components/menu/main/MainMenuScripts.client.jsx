import placeholders from './MainMenu.module.css'
import StaticMenuButtonScript from "../../fmb/StaticMenuButtonScript.jsx";

export default function MainMenuScripts() {
    const fmb = document.querySelectorAll('.'+placeholders.menuButtonScript)

    return <>{[...fmb].map((b) => <StaticMenuButtonScript
        key={b.getAttribute('data-id')}
        id={b.getAttribute('data-id')}
        outerId={b.getAttribute('data-outerid')}
    />)}</>
};