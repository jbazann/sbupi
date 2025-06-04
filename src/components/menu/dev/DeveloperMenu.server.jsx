import Developer from "./Developer.server.jsx";
import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";

export default function DeveloperMenu({id, parentId, routingKey}) {
    return <>
        <StaticMenu key="DeveloperMenu" menu="developer"
                    id={id} parentId={parentId}
                    routingKey={routingKey}
                    bareContainer={true} >
            <Developer />
        </StaticMenu>
    </>
};