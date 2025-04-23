import ThiccButton from "../../clickable/ThiccButton.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import {getGlobalId, getIdScope} from "../../../lib/common.js";

export const scope = getGlobalId()

export default function LinksMenu() {
    const id = getIdScope(scope);
    return <>
        <StaticMenuButton key={id()} label={"Links"}
                          routes={['links']}
                          scope={scope}>
            <ThiccButton key={id()}>
                <a href="https://www.linkedin.com/in/jbazann/" target="_blank">
                    LinkedIn
                </a>
            </ThiccButton>
            <ThiccButton key={id()}>
                <a href="https://github.com/jbazann" target="_blank">
                    GitHub
                </a>
            </ThiccButton>
            <ThiccButton key={id()}>
                <a href="https://x.com/jbazann_" target="_blank">
                    Twitter
                </a>
            </ThiccButton>
        </StaticMenuButton>
    </>
}