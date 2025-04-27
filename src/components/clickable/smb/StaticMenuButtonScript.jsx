import {devLog, getScopedId,} from "../../../lib/common.js";
import {useEffect} from "react";
import {subState, offBtn, offState, onBtn, onState} from "./StaticMenuButton.jsx";

export default function StaticMenuButtonScript({scope, outerScope}) {
    useEffect(() => {
        const idFn = getScopedId(scope)
        const outerFn = outerScope ? getScopedId(outerScope) : null

        const onStateElem = document.getElementById(idFn(onState));
        const offStateElem = document.getElementById(idFn(offState));
        const onBtnElem = document.getElementById(idFn(onBtn));
        const offBtnElem = document.getElementById(idFn(offBtn));

        let outerSubmenuStateElem;
        let outerOnStateElem;
        if (outerScope) {
            outerSubmenuStateElem = document.getElementById(outerFn(subState));
            outerOnStateElem = document.getElementById(outerFn(onState));
        }

        let onClickHandler, offClickHandler
        onBtnElem?.addEventListener("click", onClickHandler = () => {
            if (onStateElem) onStateElem.checked = true;
            if (outerSubmenuStateElem) outerSubmenuStateElem.checked = true;
        });
        offBtnElem?.addEventListener("click", offClickHandler = () => {
            if (offStateElem) offStateElem.checked = true;
            if (outerOnStateElem) outerOnStateElem.checked = true;
        });
        return () => {
            onBtnElem?.removeEventListener("click", onClickHandler);
            offBtnElem?.removeEventListener("click", offClickHandler);
        };
    }, [scope, outerScope]);
}