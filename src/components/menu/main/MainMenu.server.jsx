import StaticMenu from "@c/layout/menu/StaticMenu.server.jsx";
import StaticMenuButton from "@c/layout/menu/StaticMenuButton.server.jsx";
import {ids} from "@l/common.shared.js";
import DeveloperMenu from "@c/menu/dev/DeveloperMenu.server.jsx";
import CatMenu from "@c/menu/cat/CatMenu.server.jsx";
import LinksMenu from "@c/menu/bare/LinksMenu.server.jsx";
import ProjectsMenu from "@c/menu/projects/ProjectsMenu.server.jsx";
import SettingsMenu from "@c/menu/settings/SettingsMenu.server.jsx";
import Soon from "@c/menu/bare/Soon.server.jsx";

export default function MainMenu() {
    const [
        main,
        developer, projects, links, cat, gallery, settings, machine
    ] = ids(8)
    return <>
        <StaticMenu menu="MainMenu" isMainMenu={true} id={main} >
            <StaticMenuButton key={developer} id={developer}
                              label={'The Developer'} labelKey={'mainMenu.dev.button'} />
            <StaticMenuButton key={projects} id={projects}
                              label={'Projects'} labelKey={'mainMenu.projects.button'} />
            <StaticMenuButton key={links} id={links}
                              label={'Links'} labelKey={'mainMenu.links.button'} />
            <StaticMenuButton key={cat} id={cat}
                              label={'Cat'} labelKey={'mainMenu.cat.button'} />
            <StaticMenuButton key={gallery} id={gallery}
                              label={'Gallery'} labelKey={'mainMenu.gallery.button'} />
            <StaticMenuButton key={settings} id={settings}
                              label={'Settings'} labelKey={'mainMenu.settings.button'}  />
            <StaticMenuButton key={machine} id={machine}
                              label={'The Machine'} labelKey={'mainMenu.machine.button'}
                              disabled={true} />
        </StaticMenu>
        <DeveloperMenu id={developer} parentId={main} />
        <ProjectsMenu id={projects} parentId={main} />
        <LinksMenu id={links} parentId={main} />
        <CatMenu id={cat} parentId={main} />
        <StaticMenu id={gallery} parentId={main}>
            <Soon />
        </StaticMenu>
        <SettingsMenu id={settings} parentId={main} />
    </>
}