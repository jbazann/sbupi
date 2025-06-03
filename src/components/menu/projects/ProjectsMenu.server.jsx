import Skwidl from "./Skwidl.server.jsx";
import Sbupi from "./Sbupi.server.jsx";
import Lady from "./Lady.server.jsx";
import Expunged from "../bare/Expunged.server.jsx";
import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";
import {ids} from "@l/common.shared.js";
import StaticMenuButton from "@c/layout/menu/StaticMenuButton.server.jsx";

export default function ProjectsMenu({id, parentId}) {
    const [skwidl,sbupi,lady,machine] = ids(4)
    return <>
        <StaticMenu key="ProjectsMenu" menu={"projects"}
                    id={id} parentId={parentId} >
            <StaticMenuButton id={skwidl} label={'Skwidl'} />
            <StaticMenuButton id={sbupi} label={'Sbupi'} />
            <StaticMenuButton id={lady} label={'Lady'} />
            <StaticMenuButton id={machine} label={'The Machine'} />
        </StaticMenu>
        <StaticMenu key="skwidl" menu={"skwidl"}
                    id={skwidl} parentId={id}
                    bareContainer={true} >
            <Skwidl />
        </StaticMenu>
        <StaticMenu key="sbupi" menu={"sbupi"}
                    id={sbupi} parentId={id}
                    bareContainer={true} >
            <Sbupi />
        </StaticMenu>
        <StaticMenu key="lady" menu={"lady"}
                    id={lady} parentId={id}
                    bareContainer={true} >
            <Lady />
        </StaticMenu>
        <StaticMenu key="machine" menu={"machine"}
                    id={machine} parentId={id}
                    bareContainer={true} >
            <Expunged />
        </StaticMenu>
    </>
};