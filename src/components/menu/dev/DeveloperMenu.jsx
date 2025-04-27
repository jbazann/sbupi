import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import {getScopedId} from "../../../lib/common.js";
import Developer from "./Developer.jsx";

export default function DeveloperMenu({scope}) {
    const id = getScopedId(scope)
    return <>
        <StaticMenuButton key={id('key1')} label={"The Developer"}
                          routes={['about']}
                          scope={id('scope')} clean={true} >
            <Developer scope={id('dev')} />
        </StaticMenuButton>
    </>
};