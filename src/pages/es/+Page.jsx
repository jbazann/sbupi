import RootPage from "../+Page.jsx";
import '../Layout.css'
import {Lang} from "../../lib/context.js";

export default function Page() {
    if (import.meta.env.SSR) {
        return <Lang value={'es'}>
            <RootPage />
        </Lang>
    } else {
        return RootPage()
    }
}