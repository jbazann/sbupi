import CatMenu from "@c/menu/cat/CatMenu.server.jsx";
import MenuContainer from "@c/menu/MenuContainer.server.jsx";
import Soon from "@c/menu/bare/Soon.server.jsx";
import DeveloperMenu from "@c/menu/dev/DeveloperMenu.server.jsx";
import SettingsMenu from "@c/menu/settings/SettingsMenu.server.jsx";
import ProjectsMenu from "@c/menu/projects/ProjectsMenu.server.jsx";
import LinksMenu from "@c/menu/bare/LinksMenu.server.jsx";
import StaticMenu from "@c/layout/control/StaticMenu.server.jsx";

export default function MainMenu() {
    return <>
        <MenuContainer >
            <DeveloperMenu />
            <ProjectsMenu />
            <LinksMenu />
            <CatMenu />
            <StaticMenu key={'idkman'} label={"??????"} route={'notyet'} >
                <Soon />
            </StaticMenu>
            <SettingsMenu />
            <StaticMenu key={'T&#_M___5_ERR_'} label={"T&# M$__5='_"} route={'machine'}
                        disabled={true} hasSubmenu={false} >

                <Soon />
            </StaticMenu>
        </MenuContainer>
    </>
};