import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";
import BaseButton from "@c/layout/control/BaseButton.server.jsx";

export default function LinksMenu({id, parentId, routingKey}) {
    return <>
        <StaticMenu key="LinksMenu" menu={"links"}
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
        </StaticMenu>
    </>
}