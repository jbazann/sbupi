import {lazy, useEffect} from "react";
import {placeholders} from "@l/placeholders.shared.js";
import {deserialize, initStack, serialize} from "@l/routing.shared.js";

export default function Router({data}) {
    if (import.meta.env.SSR) {
        const HydrationRoot = lazy(async() => import("./HydrationRoot.server.jsx"));
        const serialized = serialize()
        return <>
            <HydrationRoot comp={placeholders.Router} data={{data: serialized}} />
        </>
    } else {
        useEffect(() => {
            deserialize(data)
            initStack()
        })
        return null
    }
}