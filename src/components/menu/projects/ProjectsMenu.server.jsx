import StaticMenuButton from "../../clickable/smb/StaticMenuButton.server.jsx";
import Skwidl from "./Skwidl.server.jsx";
import Sbupi from "./Sbupi.server.jsx";
import Lady from "./Lady.server.jsx";
import Expunged from "../bare/Expunged.server.jsx";

export default function ProjectsMenu() {
    return <>
        <StaticMenuButton key="ProjectsMenu" label={"Projects"}
                          translationKey={'root.mainMenu.projects.button'}
                          routes={['projects']} >
            <StaticMenuButton key="skwidl" label={"Skwidl"}
                              routes={['skwidl']}
                              parentRoute={'projects'} clean={true} >
                <Skwidl />
            </StaticMenuButton>
            <StaticMenuButton key="sbupi" label={"Sbupi"}
                              routes={['sbupi']}
                              parentRoute={'projects'} clean={true} >
                <Sbupi />
            </StaticMenuButton>
            <StaticMenuButton key="lady" label={"Lady"}
                              routes={['lady']}
                              parentRoute={'projects'} clean={true} >
                <Lady />
            </StaticMenuButton>
            <StaticMenuButton key="machine" label={"Machine"}
                              routes={['machine']}
                              parentRoute={'projects'} clean={true}>
                <Expunged />
            </StaticMenuButton>
        </StaticMenuButton>
    </>
};