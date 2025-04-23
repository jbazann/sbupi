import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import {getGlobalId, getIdScope} from "../../../lib/common.js";
import Developer from "./Developer.jsx";

export const scope = getGlobalId()

export default function DeveloperMenu() {
    const id = getIdScope(scope)
    return <>
        <StaticMenuButton key={id()} label={"The Developer"}
                          routes={['about']}
                          scope={scope} clean={true} >
            <Developer />
        </StaticMenuButton>
    </>
};