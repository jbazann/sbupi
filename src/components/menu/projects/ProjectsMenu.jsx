import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import Skwidl from "./Skwidl.jsx";
import Sbupi from "./Sbupi.jsx";
import Lady from "./Lady.jsx";
import Expunged from "../bare/Expunged.jsx";
import {getGlobalId, getIdScope} from "../../../lib/common.js";

export const scope = getGlobalId(),
    smb = getGlobalId(),
    skwidl = getGlobalId(),
    sbupi = getGlobalId(),
    lady = getGlobalId(),
    ___m21AB_C = getGlobalId()

export default function ProjectsMenu() {
    const id = getIdScope(scope)
    return <>
        <StaticMenuButton key={id()} label={"Projects"}
                          routes={['projects']}
                          scope={smb} >
            <StaticMenuButton key={id()} label={"Skwidl"}
                              routes={['skwidl']}
                              parentRoute={'projects'}
                              scope={skwidl}
                              outerScope={scope} clean={true} >
                <Skwidl />
            </StaticMenuButton>
            <StaticMenuButton key={id()} label={"Sbupi"}
                              routes={['sbupi']}
                              parentRoute={'projects'}
                              scope={sbupi}
                              outerScope={smb} clean={true} >
                <Sbupi />
            </StaticMenuButton>
            <StaticMenuButton key={id()} label={"Lady"}
                              routes={['lady']}
                              parentRoute={'projects'}
                              scope={lady}
                              outerScope={smb} clean={true} >
                <Lady />
            </StaticMenuButton>
            <StaticMenuButton key={id()} label={"Machine"}
                              routes={['machine']}
                              parentRoute={'projects'}
                              scope={___m21AB_C}
                              outerScope={smb} clean={true}>
                <Expunged />
            </StaticMenuButton>
        </StaticMenuButton>
    </>
};