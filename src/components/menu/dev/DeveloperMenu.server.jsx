import StaticMenuButton from "../../clickable/smb/StaticMenuButton.server.jsx";
import Developer from "./Developer.server.jsx";

export default function DeveloperMenu({Context}) {
    return <>
        <StaticMenuButton key="DeveloperMenu" label="The Developer"
                          labelId={'root.mainMenu.dev.button'}
                          routes={['about']}
                          Context={Context} clean={true} >
            <Developer />
        </StaticMenuButton>
    </>
};