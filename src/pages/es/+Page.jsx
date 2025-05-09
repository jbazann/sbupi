import {createContext} from "react";
import RootPage from "../+Page.jsx";
import '../Layout.css'

export default function Page() {
    const Context = createContext({lang: 'es'})
    return RootPage({Context})
}