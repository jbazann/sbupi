import ServerMenu from "@c/layout/menu/server/ServerMenu.server.jsx";
import BaseButton from "@c/layout/control/BaseButton.shared.jsx";

export default function LinksMenu({id, parentId, routingKey}) {
    return <>
        <ServerMenu key="LinksMenu" label={"links"}
                    routingKey={routingKey}
                    id={id} parentId={parentId} >
            <BaseButton key="LinkedIn">
                <a href="https://www.linkedin.com/in/jbazann/" target="_blank">
                    LinkedIn
                </a>
            </BaseButton>
            <BaseButton key="GitHub">
                <a href="https://github.com/jbazann" target="_blank">
                    GitHub
                </a>
            </BaseButton>
            <BaseButton key="Twitter">
                <a href="https://x.com/jbazann_" target="_blank">
                    X/Twitter
                </a>
            </BaseButton>
        </ServerMenu>
    </>
}