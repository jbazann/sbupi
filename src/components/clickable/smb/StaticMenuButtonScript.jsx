import {devLog, getIdScope,} from "../../../lib/common.js";
import {useEffect} from "react";
import {subState, offBtn, offState, onBtn, onState} from "./StaticMenuButton.jsx";

export default function StaticMenuButtonScript({scope, outerScope}) {
    useEffect(() => {
        const idFn = getIdScope(scope)
        const outerFn = getIdScope(outerScope)

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

        devLog({
            scope,
            outerScope,
            onStateElem,
            offStateElem,
            onBtnElem,
            offBtnElem,
            outerSubmenuStateElem,
            outerOnStateElem,
        }, class SMBScript{}.prototype)

        const onClickHandler = () => {
            if (onStateElem) onStateElem.checked = true;
            if (outerSubmenuStateElem) outerSubmenuStateElem.checked = true;
        }
        if (onBtnElem) onBtnElem.addEventListener("click", onClickHandler);

        const offClickHandler = () => {
            if (offStateElem) offStateElem.checked = true;
            if (outerOnStateElem) outerOnStateElem.checked = true;
        }
        if (offBtnElem) offBtnElem.addEventListener("click", offClickHandler);

        return () => {
            onBtnElem?.removeEventListener("click", onClickHandler);
            offBtnElem?.removeEventListener("click", offClickHandler);
        };
    }, [scope, outerScope]);
}