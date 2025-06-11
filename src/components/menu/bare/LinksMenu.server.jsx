import ServerMenu from "@c/layout/menu/server/ServerMenu.server.jsx";
import ActionButton from "@c/layout/control/ActionButton.server.jsx";
import {sid} from "@l/common.shared.js";

export default function LinksMenu({id, parentId, routingKey}) {
    return <>
        <ServerMenu key="LinksMenu" label={"links"}
                    routingKey={routingKey}
                    id={id} parentId={parentId} >
            <ActionButton id={sid(id,'linkedin')} key="LinkedIn">
                <a href="https://www.linkedin.com/in/jbazann/" target="_blank">
                    LinkedIn
                </a>
            </ActionButton>
            <ActionButton id={sid(id,'github')} key="GitHub">
                <a href="https://github.com/jbazann" target="_blank">
                    GitHub
                </a>
            </ActionButton>
            <ActionButton id={sid(id,'twitter')} key="Twitter">
                <a href="https://x.com/jbazann_" target="_blank">
                    X/Twitter
                </a>
            </ActionButton>
        </ServerMenu>
    </>
}