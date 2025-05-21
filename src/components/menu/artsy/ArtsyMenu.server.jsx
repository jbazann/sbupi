import StaticMenuButton from "@c/layout/control/StaticMenuButton.server.jsx";
import HydrationRoot from "@c/system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import {useContext, useId} from "react";
import {Lang} from "@l/context.shared.js";
import {useData} from "vike-react/useData";

export default function ArtsyMenu() {
    const lang = useContext(Lang)
    const {poems} = useData()
    const id = useId()
    let counter = 0
    return <>
        <StaticMenuButton key="ArtsyMenu" label="??????"
                          labelId={'root.mainMenu.artsy.button'}
                          routes={['stuff']} >
            {!poems?.list ? null : poems.list.map((item, i) => (<>
                <StaticMenuButton key={id + counter}
                                  label={item.label}
                                  clean={true}
                                  parentRoute={'stuff'}
                                  routes={counter++} >
                </StaticMenuButton>
            </>))
            }
            <HydrationRoot comp={placeholders.Artsy} data={{lang,version: poems?.version,counter}} />
        </StaticMenuButton>
    </>

};