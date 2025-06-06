import Skwidl from "./Skwidl.server.jsx";
import Sbupi from "./Sbupi.server.jsx";
import Lady from "./Lady.server.jsx";
import Expunged from "../bare/Expunged.server.jsx";
import ServerMenu from "@c/layout/menu/server/ServerMenu.server.jsx";
import {ids} from "@l/common.shared.js";
import ServerMenuButton from "@c/layout/menu/server/ServerMenuButton.server.jsx";

export default function ProjectsMenu({id, parentId, routingKey, route}) {
    const [skwidl,sbupi,lady,machine] = ids(4)
    return <>
        <ServerMenu key="ProjectsMenu" label={"projects"}
                    routingKey={routingKey}
                    id={id} parentId={parentId} >
            <ServerMenuButton id={skwidl} label={'Skwidl'} route={'skwidl'} parentRoute={route} />
            <ServerMenuButton id={sbupi} label={'Sbupi'} route={'sbupi'} parentRoute={route}  />
            <ServerMenuButton id={lady} label={'Lady'} route={'lady'} parentRoute={route}  />
            <ServerMenuButton id={machine} label={'The Machine'} route={'machine'} parentRoute={route} />
        </ServerMenu>
        <ServerMenu key="skwidl" label={"skwidl"}
                    id={skwidl} parentId={id}
                    routingKey={'skwidl'}
                    bareContainer={true} >
            <Skwidl />
        </ServerMenu>
        <ServerMenu key="sbupi" label={"sbupi"}
                    id={sbupi} parentId={id}
                    routingKey={'sbupi'}
                    bareContainer={true} >
            <Sbupi />
        </ServerMenu>
        <ServerMenu key="lady" label={"lady"}
                    id={lady} parentId={id}
                    routingKey={'lady'}
                    bareContainer={true} >
            <Lady />
        </ServerMenu>
        <ServerMenu key="machine" label={"machine"}
                    id={machine} parentId={id}
                    routingKey={'machine'}
                    bareContainer={true} >
            <Expunged />
        </ServerMenu>
    </>
};