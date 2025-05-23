import Skwidl from "./Skwidl.server.jsx";
import Sbupi from "./Sbupi.server.jsx";
import Lady from "./Lady.server.jsx";
import Expunged from "../bare/Expunged.server.jsx";
import StaticMenu from "@c/layout/control/StaticMenu.server.jsx";

export default function ProjectsMenu() {
    return <>
        <StaticMenu key="ProjectsMenu" label={"Projects"}
                    labelId={'root.mainMenu.projects.button'}
                    route={'projects'} >
            <StaticMenu key="skwidl" label={"Skwidl"}
                        hasSubmenu={false}
                        route={'skwidl'}
                        parentRoute={'projects'} >
                <Skwidl />
            </StaticMenu>
            <StaticMenu key="sbupi" label={"Sbupi"}
                        hasSubmenu={false}
                        route={'sbupi'}
                        parentRoute={'projects'} >
                <Sbupi />
            </StaticMenu>
            <StaticMenu key="lady" label={"Lady"}
                        hasSubmenu={false}
                        route={'lady'}
                        parentRoute={'projects'} >
                <Lady />
            </StaticMenu>
            <StaticMenu key="machine" label={"Machine"}
                        hasSubmenu={false}
                        route={'machine'}
                        parentRoute={'projects'} >
                <Expunged />
            </StaticMenu>
        </StaticMenu>
    </>
};