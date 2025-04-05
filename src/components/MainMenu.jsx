import FastMenuButtonContainer from "../components/FastMenuButtonContainer.jsx";
import FastMenuButton from "../components/FastMenuButton.jsx";
import {identifier} from "../lib/common.js";

const
    main = 'main_menu',
    me__ = 'user_menu',
    prj_ = 'admin_menu',
        sbp_ = 'sbupi_proj',
        swkd = 'skwidl_proj',
        lady = 'lady_proj',
    lnk_ = 'admin_gateway',
    cat_ = 'admin_eureka',
    stn_ = 'admin_orders',
        cook = 'cookies_btn',
        them = 'theme_btn',
        lng_ = 'language_btn',
    scrt = 'top_secret'

export default function MainMenu() {
    let c = 0;
    return <>
        <FastMenuButtonContainer key={identifier(c++)} id={identifier(c++,main)} buttons={[
            <FastMenuButton key={identifier(c++)} label={"Me"} id={identifier(c++,me__)}
                            outerId={identifier(c++,main)} menu={[]} />,
            <FastMenuButton key={identifier(c++)} label={"Projects"} id={identifier(c++,prj_)}
                            outerId={identifier(c++,main)} menu={[
                <FastMenuButton key={identifier(c++)} label={"Sbupi"} id={identifier(c++,sbp_)}
                                outerId={identifier(c++,prj_)} menu={[]}/>,
                <FastMenuButton key={identifier(c++)} label={"Skwidl"} id={identifier(c++,swkd)}
                                outerId={identifier(c++,prj_)} menu={[]}/>,
                <FastMenuButton key={identifier(c++)} label={"Lady"} id={identifier(c++,lady)}
                                outerId={identifier(c++,prj_)} menu={[]}/>,
            ]} />,
            <FastMenuButton key={identifier(c++)} label={"Links"} id={identifier(c++,lnk_)}
                            outerId={identifier(c++,main)} menu={[]} />,
            <FastMenuButton key={identifier(c++)} label={"Cat"} id={identifier(c++,cat_)}
                            outerId={identifier(c++,main)} menu={[]} />,
            <FastMenuButton key={identifier(c++)} label={"????"} id={identifier(c++,scrt)}
                            outerId={identifier(c++,main)} menu={[]} />,
            <FastMenuButton key={identifier(c++)} label={"Settings"} id={identifier(c++,stn_)}
                            outerId={identifier(c++,main)} menu={[
                <FastMenuButton key={identifier(c++)} label={"Cookies"} id={identifier(c++,cook)}
                                outerId={identifier(c++,stn_)} menu={[]} />,
                <FastMenuButton key={identifier(c++)} label={"Theme"} id={identifier(c++,them)}
                                outerId={identifier(c++,stn_)} menu={[]} />,
                <FastMenuButton key={identifier(c++)} label={"Language"} id={identifier(c++,lng_)}
                                outerId={identifier(c++,stn_)} menu={[]} />,
            ]} />,
        ]}/></>
};