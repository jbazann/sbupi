import CatMenu from "../cat/CatMenu.jsx";
import MenuContainer from "../MenuContainer.jsx";
import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import Soon from "../bare/Soon.jsx";
import {getScopedId} from "../../../lib/common.js";
import DeveloperMenu from "../dev/DeveloperMenu.jsx";
import SettingsMenu from "../settings/SettingsMenu.jsx";
import ProjectsMenu from "../projects/ProjectsMenu.jsx";
import LinksMenu from "../bare/LinksMenu.jsx";

export default function MainMenu({scope}) {
    const id = getScopedId(scope)
    let idCounter = 0
    return <>
        <MenuContainer >
            <DeveloperMenu scope={id(idCounter++)} />
            <ProjectsMenu scope={id(idCounter++)} />
            <LinksMenu scope={id(idCounter++)} />
            <CatMenu scope={id(idCounter++)} />
            <StaticMenuButton key={id(idCounter++)} label={"????"} routes={['notyet']}
                              scope={id('unk')} clean={true}>
                <Soon />
            </StaticMenuButton>
            <SettingsMenu scope={id(idCounter++)} />
            <StaticMenuButton key={id(idCounter++)} label={"T&# M$__5='_"} routes={['machine']}
                              scope={id('unc')} disabled={true} clean={true}>
                <Soon />
            </StaticMenuButton>
        </MenuContainer>
    </>
};