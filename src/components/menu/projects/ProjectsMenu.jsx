import StaticMenuButton from "../../clickable/smb/StaticMenuButton.jsx";
import Skwidl from "./Skwidl.jsx";
import Sbupi from "./Sbupi.jsx";
import Lady from "./Lady.jsx";
import Expunged from "../bare/Expunged.jsx";
import {getScopedId} from "../../../lib/common.js";

export default function ProjectsMenu({scope}) {
    const id = getScopedId(scope)
    return <>
        <StaticMenuButton key={id('key1')} label={"Projects"}
                          routes={['projects']}
                          scope={id('projects_button')} >
            <StaticMenuButton key={id('key2')} label={"Skwidl"}
                              routes={['skwidl']}
                              parentRoute={'projects'}
                              scope={id('skwidl_button')}
                              outerScope={id('projects_button')} clean={true} >
                <Skwidl scope={id('skwidl')} />
            </StaticMenuButton>
            <StaticMenuButton key={id('key3')} label={"Sbupi"}
                              routes={['sbupi']}
                              parentRoute={'projects'}
                              scope={id('sbupi_button')}
                              outerScope={id('projects_button')} clean={true} >
                <Sbupi scope={id('sbupi')} />
            </StaticMenuButton>
            <StaticMenuButton key={id('key4')} label={"Lady"}
                              routes={['lady']}
                              parentRoute={'projects'}
                              scope={id('lady_button')}
                              outerScope={id('projects_button')} clean={true} >
                <Lady scope={id('lady')} />
            </StaticMenuButton>
            <StaticMenuButton key={id('key5')} label={"Machine"}
                              routes={['machine']}
                              parentRoute={'projects'}
                              scope={id('_AD#5____')}
                              outerScope={id('projects_button')} clean={true}>
                <Expunged />
            </StaticMenuButton>
        </StaticMenuButton>
    </>
};