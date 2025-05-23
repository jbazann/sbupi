import Developer from "./Developer.server.jsx";
import StaticMenu from "@c/layout/control/StaticMenu.server.jsx";

export default function DeveloperMenu() {
    return <>
        <StaticMenu key="DeveloperMenu" label="The Developer"
                    hasSubmenu={false}
                    labelId={'root.mainMenu.dev.button'}
                    route={'about'} >
            <Developer />
        </StaticMenu>
    </>
};