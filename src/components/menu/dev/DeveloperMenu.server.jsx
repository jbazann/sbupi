import Developer from "./Developer.server.jsx";
import ServerMenu from "@c/layout/menu/server/ServerMenu.server.jsx";

export default function DeveloperMenu({id, parentId, routingKey}) {
    return <>
        <ServerMenu key="DeveloperMenu" label="developer"
                    id={id} parentId={parentId}
                    routingKey={routingKey}
                    bareContainer={true} >
            <Developer />
        </ServerMenu>
    </>
};