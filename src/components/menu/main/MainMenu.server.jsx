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
        <StaticMenu menu="MainMenu" isMainMenu={true} id={main} routingKey={"root"} >
            <StaticMenuButton key={developer} id={developer}
                              route={'about'}
                              label={'The Developer'} labelKey={'mainMenu.dev.button'} />
            <StaticMenuButton key={projects} id={projects}
                              route={'projects'}
                              label={'Projects'} labelKey={'mainMenu.projects.button'} />
            <StaticMenuButton key={links} id={links}
                              route={'links'}
                              label={'Links'} labelKey={'mainMenu.links.button'} />
            <StaticMenuButton key={cat} id={cat}
                              route={'cat'}
                              label={'Cat'} labelKey={'mainMenu.cat.button'} />
            <StaticMenuButton key={gallery} id={gallery}
                              route={'gallery'}
                              label={'Gallery'} labelKey={'mainMenu.gallery.button'} />
            <StaticMenuButton key={settings} id={settings}
                              route={'settings'}
                              label={'Settings'} labelKey={'mainMenu.settings.button'}  />
            <StaticMenuButton key={machine} id={machine}
                              label={'The Machine'} labelKey={'mainMenu.machine.button'}
                              disabled={true} />
        </StaticMenu>
        <DeveloperMenu id={developer} parentId={main} routingKey={'about'} />
        <ProjectsMenu id={projects} parentId={main} routingKey={'projects'} route={'projects'} />
        <LinksMenu id={links} parentId={main} routingKey={'links'} />
        <CatMenu id={cat} parentId={main} routingKey={'cat'} />
        <StaticMenu id={gallery} parentId={main} routingKey={'gallery'} >
            <Soon />
        </StaticMenu>
        <SettingsMenu id={settings} parentId={main} routingKey={'settings'} route={'settings'} />
    </>
}