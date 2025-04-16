import {id} from "../lib/common.js";
import CatMenu from "./cat/CatMenu.jsx";
import Sbupi from "./text/Sbupi.jsx";
import MenuContainer from "./fmb/MenuContainer.jsx";
import StaticMenuButton from "./fmb/StaticMenuButton.jsx";
import Lady from "./text/Lady.jsx";
import LinksMenu from "./links/LinksMenu.jsx";
import Soon from "./soon/Soon.jsx";

const
    main = 'main_menu',
    me = 'me',
    prj = 'projects',
        sbupi = 'sbupi_proj',
        skwidl = 'skwidl_proj',
        lady = 'lady_proj',
    links = 'links',
    cat = 'cats',
    sttn = 'settings',
        cook = 'cookies_btn',
        theme = 'theme_btn',
        lang = 'language_btn',
    scrt = 'top_secret',
    ___m4AA_C = '_________________________________'

export default function MainMenu() {
    // let c = 0;
    return <>
        <MenuContainer id={id(main)} menu={[
            <StaticMenuButton key={id()} label={"Me"} id={id(me)}
                            menu={
                <Soon/>
                            } />,
            <StaticMenuButton key={id()} label={"Projects"} id={id(prj)}
                            menu={[
                <StaticMenuButton key={id()} label={"Sbupi"} id={id(sbupi)}
                                outerId={id(prj)} clean={true} menu={[
                    <Sbupi key={id()} />
                ]}/>,
                <StaticMenuButton key={id()} label={"Skwidl"} id={id(skwidl)}
                                outerId={id(prj)} menu={
                    <Soon/>
                }/>,
                <StaticMenuButton key={id()} label={"Lady"} id={id(lady)}
                                outerId={id(prj)} menu={[
                    <Lady key={id()}/>
                ]}/>,
            ]} />,
            <StaticMenuButton key={id()} label={"Links"} id={id(links)}
                            menu={
                <LinksMenu/>
                            } />,
            <StaticMenuButton key={id()} label={"Cat"} id={id(cat)}
                            menu={[
                <CatMenu key={id()} catButtonId={id(cat)} />
            ]} />,
            <StaticMenuButton key={id()} label={"????"} id={id(scrt)}
                            menu={
                <Soon/>
                            } />,
            <StaticMenuButton key={id()} label={"Settings"} id={id(sttn)}
                            menu={[
                <StaticMenuButton key={id()} label={"Cookies"} id={id(cook)}
                                outerId={id(sttn)} menu={
                    <Soon/>
                } />,
                <StaticMenuButton key={id()} label={"Theme"} id={id(theme)}
                                outerId={id(sttn)} menu={
                    <Soon/>
                } />,
                <StaticMenuButton key={id()} label={"Language"} id={id(lang)}
                                outerId={id(sttn)} menu={
                    <Soon/>
                } />,
            ]} />,
            <StaticMenuButton disabled={true} key={id()} label={"T&# M$__5='_"} id={id(___m4AA_C)}
                              menu={
                <Soon/>
                              } />,
        ]}/></>
};