import Skwidl from "./Skwidl.server.jsx";
import Sbupi from "./Sbupi.server.jsx";
import Lady from "./Lady.server.jsx";
import Expunged from "../bare/Expunged.server.jsx";
import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";
import {ids} from "@l/common.shared.js";
import StaticMenuButton from "@c/layout/menu/StaticMenuButton.server.jsx";

export default function ProjectsMenu({id, parentId, routingKey, route}) {
    const [skwidl,sbupi,lady,machine] = ids(4)
    return <>
        <StaticMenu key="ProjectsMenu" menu={"projects"}
                    routingKey={routingKey}
                    id={id} parentId={parentId} >
            <StaticMenuButton id={skwidl} label={'Skwidl'} route={'skwidl'} parentRoute={route} />
            <StaticMenuButton id={sbupi} label={'Sbupi'} route={'sbupi'} parentRoute={route}  />
            <StaticMenuButton id={lady} label={'Lady'} route={'lady'} parentRoute={route}  />
            <StaticMenuButton id={machine} label={'The Machine'} route={'machine'} parentRoute={route} />
        </StaticMenu>
        <StaticMenu key="skwidl" menu={"skwidl"}
                    id={skwidl} parentId={id}
                    routingKey={'skwidl'}
                    bareContainer={true} >
            <Skwidl />
        </StaticMenu>
        <StaticMenu key="sbupi" menu={"sbupi"}
                    id={sbupi} parentId={id}
                    routingKey={'sbupi'}
                    bareContainer={true} >
            <Sbupi />
        </StaticMenu>
        <StaticMenu key="lady" menu={"lady"}
                    id={lady} parentId={id}
                    routingKey={'lady'}
                    bareContainer={true} >
            <Lady />
        </StaticMenu>
        <StaticMenu key="machine" menu={"machine"}
                    id={machine} parentId={id}
                    routingKey={'machine'}
                    bareContainer={true} >
            <Expunged />
        </StaticMenu>
    </>
};