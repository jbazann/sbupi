import CatMenu from "../cat/CatMenu.server.jsx";
import MenuContainer from "../MenuContainer.server.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.server.jsx";
import Soon from "../bare/Soon.server.jsx";
import DeveloperMenu from "../dev/DeveloperMenu.server.jsx";
import SettingsMenu from "../settings/SettingsMenu.server.jsx";
import ProjectsMenu from "../projects/ProjectsMenu.server.jsx";
import LinksMenu from "../bare/LinksMenu.server.jsx";

export default function MainMenu() {
    return <>
        <MenuContainer >
            <DeveloperMenu />
            <ProjectsMenu />
            <LinksMenu />
            <CatMenu />
            <StaticMenuButton key={'idkman'} label={"????"} routes={['notyet']}
                              clean={true}>
                <Soon />
            </StaticMenuButton>
            <SettingsMenu />
            <StaticMenuButton key={'T&#_M___5_ERR_'} label={"T&# M$__5='_"} routes={['machine']}
                              disabled={true} clean={true}>
                <Soon />
            </StaticMenuButton>
        </MenuContainer>
    </>
};