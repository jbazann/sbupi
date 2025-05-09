import StaticMenuButton from "../../clickable/smb/StaticMenuButton.server.jsx";
import Developer from "./Developer.server.jsx";

export default function DeveloperMenu() {
    return <>
        <StaticMenuButton key="DeveloperMenu" label="The Developer"
                          labelId={'root.mainMenu.dev.button'}
                          routes={['about']} clean={true} >
            <Developer />
        </StaticMenuButton>
    </>
};