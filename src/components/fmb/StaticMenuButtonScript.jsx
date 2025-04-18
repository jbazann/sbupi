import {getIdCounter, } from "../../lib/common.js";
import {useEffect} from "react";
import {subState, offBtn, offState, onBtn, onState} from "./StaticMenuButton.jsx";

export default function StaticMenuButtonScript({id, outerId}) {
    useEffect(() => {
        const idFn = getIdCounter(id)
        const outerFn = getIdCounter(outerId)

        const onStateElem = document.getElementById(idFn(onState));
        const offStateElem = document.getElementById(idFn(offState));
        const onBtnElem = document.getElementById(idFn(onBtn));
        const offBtnElem = document.getElementById(idFn(offBtn));

        let outerSubmenuStateElem;
        let outerOnStateElem;
        if (outerId) {
            outerSubmenuStateElem = document.getElementById(outerFn(subState));
            outerOnStateElem = document.getElementById(outerFn(onState));
        }

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
    }, [id, outerId]);
}