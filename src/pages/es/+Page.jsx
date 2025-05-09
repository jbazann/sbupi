import RootPage from "../+Page.jsx";
import '../Layout.css'
import {Lang} from "../../lib/context.js";

export default function Page() {
    return <Lang value={'es'}>
        <RootPage />
    </Lang>
}