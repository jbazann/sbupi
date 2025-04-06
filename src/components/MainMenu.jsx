import FastMenuButtonContainer from "./fmb/FastMenuButtonContainer.jsx";
import FastMenuButton from "./fmb/FastMenuButton.jsx";
import {id} from "../lib/common.js";

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
    scrt = 'top_secret'

export default function MainMenu() {
    // let c = 0;
    return <>
        <FastMenuButtonContainer id={id(main)} buttons={[
            <FastMenuButton key={id()} label={"Me"} id={id(me)}
                            outerId={id(main)} menu={[]} />,
            <FastMenuButton key={id()} label={"Projects"} id={id(prj)}
                            outerId={id(main)} menu={[
                <FastMenuButton key={id()} label={"Sbupi"} id={id(sbupi)}
                                outerId={id(prj)} menu={[]}/>,
                <FastMenuButton key={id()} label={"Skwidl"} id={id(skwidl)}
                                outerId={id(prj)} menu={[]}/>,
                <FastMenuButton key={id()} label={"Lady"} id={id(lady)}
                                outerId={id(prj)} menu={[]}/>,
            ]} />,
            <FastMenuButton key={id()} label={"Links"} id={id(links)}
                            outerId={id(main)} menu={[]} />,
            <FastMenuButton key={id()} label={"Cat"} id={id(cat)}
                            outerId={id(main)} menu={[]} />,
            <FastMenuButton key={id()} label={"????"} id={id(scrt)}
                            outerId={id(main)} menu={[]} />,
            <FastMenuButton key={id()} label={"Settings"} id={id(sttn)}
                            outerId={id(main)} menu={[
                <FastMenuButton key={id()} label={"Cookies"} id={id(cook)}
                                outerId={id(sttn)} menu={[]} />,
                <FastMenuButton key={id()} label={"Theme"} id={id(theme)}
                                outerId={id(sttn)} menu={[]} />,
                <FastMenuButton key={id()} label={"Language"} id={id(lang)}
                                outerId={id(sttn)} menu={[]} />,
            ]} />,
        ]}/></>
};