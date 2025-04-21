import StaticMenuButton from "../../fmb/StaticMenuButton.jsx";
import Language from "./Language.jsx";
import Theme from "./Theme.jsx";
import Style from "./Style.jsx";
import Cookies from "./Cookies.jsx";
import {getIdCounter} from "../../../lib/common.js";
import {clientOnly} from "vike-react/clientOnly";

const Script = clientOnly(() => import('./SettingsMenuScript.jsx'))

export default function SettingsMenu({id,outerId}) {
    id = getIdCounter(id)
    return <>
        <StaticMenuButton key={id()} routes={['language']} parentRoute={'settings'}
                          label={"Language"} id={id()}
                          outerId={outerId} clean={true} menu={
            <Language /> } />
        <StaticMenuButton key={id()} routes={['theme']} parentRoute={'settings'}
                          label={"Theme"} id={id()}
                          outerId={outerId} clean={true} menu={
            <Theme /> } />
        <StaticMenuButton key={id()} routes={['style']} parentRoute={'settings'}
                          label={"Style"} id={id()}
                          outerId={outerId} clean={true} menu={
            <Style /> } />
        <StaticMenuButton key={id()} routes={['cookies']} parentRoute={'settings'}
                          label={"Cookies"} id={id()}
                          outerId={outerId} clean={true} menu={
            <Cookies /> } />
        <Script fallback="" />
    </>
}