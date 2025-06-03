import Developer from "./Developer.server.jsx";
import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";

export default function DeveloperMenu({id, parentId}) {
    return <>
        <StaticMenu key="DeveloperMenu" menu="developer"
                    id={id} parentId={parentId}
                    bareContainer={true} >
            <Developer />
        </StaticMenu>
    </>
};