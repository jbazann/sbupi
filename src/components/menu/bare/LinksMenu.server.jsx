import ActionButton from "../../clickable/ActionButton.server.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.server.jsx";

export default function LinksMenu({Context}) {
    return <>
        <StaticMenuButton key="LinksMenu" label={"Links"}
                          labelId={'root.mainMenu.links.button'}
                          routes={['links']}
                          Context={Context} >
            <ActionButton key="LinkedIn">
                <a href="https://www.linkedin.com/in/jbazann/" target="_blank">
                    LinkedIn
                </a>
            </ActionButton>
            <ActionButton key="GitHub">
                <a href="https://github.com/jbazann" target="_blank">
                    GitHub
                </a>
            </ActionButton>
            <ActionButton key="Twitter">
                <a href="https://x.com/jbazann_" target="_blank">
                    X/Twitter
                </a>
            </ActionButton>
        </StaticMenuButton>
    </>
}