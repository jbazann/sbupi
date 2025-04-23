import CatMenu from "../cat/CatMenu.jsx";
import MenuContainer from "../MenuContainer.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import Soon from "../bare/Soon.jsx";
import {getIdScope} from "../../../lib/common.js";
import DeveloperMenu from "../dev/DeveloperMenu.jsx";
import SettingsMenu from "../settings/SettingsMenu.jsx";
import ProjectsMenu from "../projects/ProjectsMenu.jsx";
import LinksMenu from "../bare/LinksMenu.jsx";

const id = getIdScope()

export default function MainMenu() {
    return <>
        <MenuContainer >
            <DeveloperMenu />
            <ProjectsMenu />
            <LinksMenu />
            <CatMenu />
            <StaticMenuButton key={id()} label={"????"} routes={['notyet']}
                              scope={id()} clean={true}>
                <Soon />
            </StaticMenuButton>
            <SettingsMenu />
            <StaticMenuButton key={id()} label={"T&# M$__5='_"} routes={['machine']}
                              scope={id()} disabled={true} clean={true}>
                <Soon />
            </StaticMenuButton>
        </MenuContainer>
    </>
};