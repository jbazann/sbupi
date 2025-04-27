import ThiccButton from "../../clickable/ThiccButton.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import {getScopedId} from "../../../lib/common.js";

export default function LinksMenu({scope}) {
    const id = getScopedId(scope);
    return <>
        <StaticMenuButton key={id('key1')} label={"Links"}
                          routes={['links']}
                          scope={id('scope')}>
            <ThiccButton key={id('key2')}>
                <a href="https://www.linkedin.com/in/jbazann/" target="_blank">
                    LinkedIn
                </a>
            </ThiccButton>
            <ThiccButton key={id('key3')}>
                <a href="https://github.com/jbazann" target="_blank">
                    GitHub
                </a>
            </ThiccButton>
            <ThiccButton key={id('key4')}>
                <a href="https://x.com/jbazann_" target="_blank">
                    Twitter
                </a>
            </ThiccButton>
        </StaticMenuButton>
    </>
}