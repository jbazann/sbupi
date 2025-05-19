import RootPage from "../+Page.jsx";
import '../Layout.css'
import {Lang} from "@l/context.js";
import {usePageContext} from "vike-react/usePageContext";

export default function Page() {
    if (import.meta.env.SSR) {
        usePageContext().lang = 'es';
        return <Lang value={'es'}>
            <RootPage />
        </Lang>
    } else {
        return RootPage()
    }
}