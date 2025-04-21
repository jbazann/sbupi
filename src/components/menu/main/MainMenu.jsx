import CatMenu from "../cat/CatMenu.jsx";
import Sbupi from "../../text/Sbupi.jsx";
import MenuContainer from "../MenuContainer.jsx";
import StaticMenuButton from "../../fmb/StaticMenuButton.jsx";
import Lady from "../../text/Lady.jsx";
import LinksMenu from "../links/LinksMenu.jsx";
import Soon from "../../soon/Soon.jsx";
import {getIdCounter} from "../../../lib/common.js";
import Developer from "../../text/Developer.jsx";
import Expunged from "../../soon/Expunged.jsx";
import SettingsMenu from "../settings/SettingsMenu.jsx";

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
        secret = 'top_secret',
        ___m21AA_C = '_________________________________',
        ___m21AB_C = '___________###____________#######'
export default function MainMenu() {
    return <>
        <MenuContainer menu={[
            <StaticMenuButton key={id()} label={"The Developer"} routes={['about']}
                              id={id(developer)} clean={true} menu={
                <Developer /> } />,
            <StaticMenuButton key={id()} label={"Projects"} routes={['projects']}
                              id={id(projects)} menu={[
                <StaticMenuButton key={id()} label={"Skwidl"} id={id(skwidl)}
                                  routes={['skwidl']} parentRoute={'projects'}
                                  outerId={id(projects)} clean={true} menu={
                    <Soon /> } />,
                <StaticMenuButton key={id()} label={"Sbupi"} id={id(sbupi)}
                                  routes={['sbupi']} parentRoute={'projects'}
                                outerId={id(projects)} clean={true} menu={
                    <Sbupi /> } />,
                <StaticMenuButton key={id()} label={"Lady"} id={id(lady)}
                                  routes={['lady']} parentRoute={'projects'}
                                outerId={id(projects)} clean={true} menu={
                    <Lady /> } />,
                <StaticMenuButton key={id()} label={"Machine"} id={id(___m21AB_C)}
                                  routes={['machine']} parentRoute={'projects'}
                                  outerId={id(projects)} clean={true} menu={
                    <Expunged /> } />,
            ]} />,
            <StaticMenuButton key={id()} label={"Links"} routes={['links']}
                              id={id(links)} menu={
                <LinksMenu /> } />,
            <StaticMenuButton key={id()} label={"Cat"} routes={['cat']}
                              id={id(cat)} menu={
                <CatMenu catButtonId={id(cat)} />} />,
            <StaticMenuButton key={id()} label={"????"} routes={['notyet']}
                              id={id(secret)} clean={true} menu={
                <Soon /> } />,
            <StaticMenuButton key={id()} label={"Settings"} routes={['settings']}
                              id={id(settings)} menu={
                <SettingsMenu id={id()} outerId={id(settings)}/>
            } />,
            <StaticMenuButton key={id()} disabled={true}
                              label={"T&# M$__5='_"} id={id(___m21AA_C)}
                              clean={true} menu={
                <Soon /> } />,
        ]} />
    </>
};