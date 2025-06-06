import {get} from "@l/net.shared.js";
import ClientMenuButton from "@c/layout/menu/client/ClientMenuButton.client.jsx";
import {useId, useRef} from "react";
import {sid} from "@l/common.shared.js";
import {lang} from "@l/environment.shared.js";
import {radios} from "@c/layout/menu/base/MenuConstants.shared.js";
import {createPortal} from "react-dom";
import {id as portalId} from "@c/system/ClientMenuRoot.shared.jsx"
import ClientMenu from "@c/layout/menu/client/ClientMenu.client.jsx";

export default GalleryMenu

function GalleryMenu({parentId}) {
    const entries = get('/w/gallery',{lang})
    const id = useId()
    const radioRef = useRef(null)
    radioRef.current = {
        onRadio: document.getElementById(sid(parentId,radios.on)),
        offRadio: document.getElementById(sid(parentId,radios.off))
    }

    return <>
        {entries.map(entry => (
            <ClientMenuButton key={entry.key} id={sid(id,entry.key)}
                              label={entry.label} />
        ))
        }
        {createPortal(entries.map(entry => (
            <ClientMenu id={sid(id,entry.key)} key={entry.key}
                        label={entry.label} parentRef={radioRef} >
            </ClientMenu>
        )), document.getElementById(portalId))
        }
    </>
}