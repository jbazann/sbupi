import CatMenu from "../cat/CatMenu.jsx";
import Sbupi from "../../text/Sbupi.jsx";
import MenuContainer from "../MenuContainer.jsx";
import StaticMenuButton from "../../fmb/StaticMenuButton.jsx";
import Lady from "../../text/Lady.jsx";
import LinksMenu from "../links/LinksMenu.jsx";
import Soon from "../../soon/Soon.jsx";
import {getIdCounter} from "../../../lib/common.js";
import Developer from "../../text/Developer.jsx";
import Language from "../settings/Language.jsx";
import Style from "../settings/Style.jsx";
import Theme from "../settings/Theme.jsx";
import Cookies from "../settings/Cookies.jsx";

const id = getIdCounter()

const main = 'main_menu',
        developer = 'developer',
        projects = 'projects',
            sbupi = 'sbupi',
            skwidl = 'skwidl',
            lady = 'lady',
        links = 'links',
        cat = 'cats',
        settings = 'settings',
            lang = 'language',
            cookies = 'cookies',
            theme = 'theme',
            style = 'style',
        secret = 'top_secret',
        ___m21AA_C = '_________________________________'

export default function MainMenu() {
    return <>
        <MenuContainer menu={[
            <StaticMenuButton key={id()} label={"Developer"} id={id(developer)} clean={true} menu={
                <Developer /> } />,
            <StaticMenuButton key={id()} label={"Projects"} id={id(projects)}
                            menu={[
                <StaticMenuButton key={id()} label={"Sbupi"} id={id(sbupi)}
                                outerId={id(projects)} clean={true} menu={
                    <Sbupi /> } />,
                <StaticMenuButton key={id()} label={"Skwidl"} id={id(skwidl)}
                                outerId={id(projects)} clean={true} menu={
                    <Soon /> } />,
                <StaticMenuButton key={id()} label={"Lady"} id={id(lady)}
                                outerId={id(projects)} clean={true} menu={
                    <Lady /> } />,
            ]} />,
            <StaticMenuButton key={id()} label={"Links"} id={id(links)} menu={
                <LinksMenu /> } />,
            <StaticMenuButton key={id()} label={"Cat"} id={id(cat)} menu={
                <CatMenu catButtonId={id(cat)} />} />,
            <StaticMenuButton key={id()} label={"????"} id={id(secret)} clean={true} menu={
                <Soon /> } />,
            <StaticMenuButton key={id()} label={"Settings"} id={id(settings)} menu={[
                <StaticMenuButton key={id()} label={"Language"} id={id(lang)}
                                  outerId={id(settings)} clean={true} menu={
                    <Language /> } />,
                <StaticMenuButton key={id()} label={"Theme"} id={id(theme)}
                                outerId={id(settings)} clean={true} menu={
                    <Theme /> } />,
                <StaticMenuButton key={id()} label={"Style"} id={id(style)}
                                  outerId={id(settings)} clean={true} menu={
                    <Style /> } />,
                <StaticMenuButton key={id()} label={"Cookies"} id={id(cookies)}
                                  outerId={id(settings)} clean={true} menu={
                    <Cookies /> } />,
            ]} />,
            <StaticMenuButton disabled={true} key={id()} label={"T&# M$__5='_"} id={id(___m21AA_C)}
                              clean={true} menu={
                <Soon /> } />,
        ]} />
    </>
};