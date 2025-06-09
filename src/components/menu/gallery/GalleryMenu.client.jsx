import {get} from "@l/net.shared.js";
import ClientMenuButton, {getBridgeRadioRef} from "@c/layout/menu/client/ClientMenuButton.client.jsx";
import {useEffect, useId, useRef, useState} from "react";
import {devLog, sid} from "@l/common.shared.js";
import {devmode, lang} from "@l/environment.shared.js";
import {radios} from "@c/layout/menu/base/MenuConstants.shared.js";
import {createPortal} from "react-dom";
import {id as portalId} from "@c/system/ClientMenuRoot.shared.jsx"
import ClientMenu from "@c/layout/menu/client/ClientMenu.client.jsx";
import Poem from "@c/menu/gallery/Poem.shared.jsx";
import TextLoadingIndicator from "@c/layout/misc/TextLoadingIndicator.shared.jsx";

export default GalleryMenu

function GalleryMenu({parentId}) {
    const [entries, setEntries] = useState(null)
    const id = useId()
    const radioRef = useRef(null)

    useEffect(() => {
        if (entries) return
        const request = get('/w/gallery',{lang})
        const timeout = setTimeout(async () => {
            radioRef.current = getBridgeRadioRef(parentId)
            setEntries(devmode ?
                getTestEntries() :
                (await request).entries)
        }, 2222)

        return () => clearTimeout(timeout)
    })
    return <>
        {entries ? null :
            <TextLoadingIndicator labels={['.','..','...']}/>
        }
        {entries?.map(entry => (
            <ClientMenuButton key={entry.key} id={sid(id,entry.key)}
                              label={entry.label} /> ))
        }
        {createPortal(entries?.map(entry => (
            <ClientMenu id={sid(id,entry.key)} key={entry.key} bareContainer={true}
                        label={entry.label} parentRef={radioRef} >
                <Poem title={entry.title} content={entry.content} />
            </ClientMenu> )), document.getElementById(portalId))
        }
    </>
}

function getTestEntries() {
    return [
        {
            key: 'I_d1',
            label: 'I — Draft I',
            version: 'unused'
        }
    ]
}

