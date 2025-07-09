import {useContext} from "react";
import {Lang} from "@l/context.shared.js";
import BasePopover from "@c/layout/popover/BasePopover.shared.jsx";

export default function Popover({children,id}) {
    return <>
        <BasePopover id={id}
                     children={children}
                     lang={useContext(Lang)}  />
    </>
};