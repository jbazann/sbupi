import ThiccButton from "../clickable/ThiccButton.jsx";

export default function LinksMenu() {
    return <>
        <div className="contents">
            <ThiccButton><a href="https://www.linkedin.com/in/jbazann/" target="_blank">LinkedIn</a></ThiccButton>
            <ThiccButton><a href="https://github.com/jbazann" target="_blank">GitHub</a></ThiccButton>
            <ThiccButton><a href="https://x.com/jbazann_" target="_blank">Twitter</a></ThiccButton>
        </div>
    </>
}