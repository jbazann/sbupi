import HydrationRoot from "@c/system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import ServerMenu from "@c/layout/menu/server/ServerMenu.server.jsx";

export default GalleryMenu

function GalleryMenu({id, parentId, routingKey}) {
    return <>
        <ServerMenu id={id} parentId={parentId} routingKey={routingKey} label={'gallery'} >
            <HydrationRoot comp={placeholders.GalleryMenu} data={{parentId: id}}
                           metadata={GalleryMenu.name} />
        </ServerMenu>
    </>
}