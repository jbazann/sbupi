import {lazy, Suspense, useEffect} from "react";
import {placeholders} from "../lib/placeholders.shared.js";
import {deserialize, initStack, serialize} from "../lib/routing.js";

export default function Router({data}) {
    if (import.meta.env.SSR) {
        const HydrationRoot = lazy(async() => import("./client/HydrationRoot.server.jsx"));
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