import ServerMenu from "@c/layout/menu/server/ServerMenu.server.jsx";
import ServerMenuButton from "@c/layout/menu/server/ServerMenuButton.server.jsx";
import {ids} from "@l/common.shared.js";
import DeveloperMenu from "@c/menu/dev/DeveloperMenu.server.jsx";
import CatMenu from "@c/menu/cat/CatMenu.server.jsx";
import LinksMenu from "@c/menu/bare/LinksMenu.server.jsx";
import ProjectsMenu from "@c/menu/projects/ProjectsMenu.server.jsx";
import SettingsMenu from "@c/menu/settings/SettingsMenu.server.jsx";
import ClientMenuRoot from "@c/system/ClientMenuRoot.shared.jsx";
import GalleryMenu from "@c/menu/gallery/GalleryMenu.server.jsx";

export default function MainMenu() {
    const [
        main,
        developer, projects, links, cat, gallery, settings, machine
    ] = ids(8)
    return <>
        <ServerMenu label="MainMenu" isMainMenu={true} id={main} routingKey={"root"} >
            <ServerMenuButton key={developer} id={developer}
                              route={'about'}
                              label={'The Developer'} labelKey={'mainMenu.dev.button'} />
            <ServerMenuButton key={projects} id={projects}
                              route={'projects'}
                              label={'Projects'} labelKey={'mainMenu.projects.button'} />
            <ServerMenuButton key={links} id={links}
                              route={'links'}
                              label={'Links'} labelKey={'mainMenu.links.button'} />
            <ServerMenuButton key={cat} id={cat}
                              route={'cat'}
                              label={'Cat'} labelKey={'mainMenu.cat.button'} />
            <ServerMenuButton key={gallery} id={gallery}
                              route={'gallery'}
                              label={'Gallery'} labelKey={'mainMenu.gallery.button'} />
            <ServerMenuButton key={settings} id={settings}
                              route={'settings'}
                              label={'Settings'} labelKey={'mainMenu.settings.button'}  />
            <ServerMenuButton key={machine} id={machine}
                              label={'The Machine'} labelKey={'mainMenu.machine.button'}
                              disabled={true} />
        </ServerMenu>
        <DeveloperMenu id={developer} parentId={main} routingKey={'about'} />
        <ProjectsMenu id={projects} parentId={main} routingKey={'projects'} route={'projects'} />
        <LinksMenu id={links} parentId={main} routingKey={'links'} />
        <CatMenu id={cat} parentId={main} routingKey={'cat'} />
        <GalleryMenu id={gallery} parentId={main} routingKey={'gallery'} />
        <SettingsMenu id={settings} parentId={main} routingKey={'settings'} route={'settings'} />
        <ClientMenuRoot />
    </>
}