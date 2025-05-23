import ActionButton from "@c/layout/control/ActionButton.server.jsx";
import StaticMenu from "@c/layout/control/StaticMenu.server.jsx";

export default function LinksMenu() {
    return <>
        <StaticMenu key="LinksMenu" label={"Links"}
                    labelId={'root.mainMenu.links.button'}
                    route={'links'} >
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
        </StaticMenu>
    </>
}