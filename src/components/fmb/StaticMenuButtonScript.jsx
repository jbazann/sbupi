import {offBtn, offState, onBtn, onState} from "../../lib/common.js";
import {useEffect} from "react";
import {getIdFn, subState} from "./StaticMenuButton.jsx";

export default function StaticMenuButtonScript({id, outerId}) {
    useEffect(() => {
        const idFn = getIdFn(id)
        const outerFn = getIdFn(outerId)

        const onStateElem = document.querySelector('#' + idFn(onState));
        const offStateElem = document.querySelector('#' + idFn(offState));
        const onBtnElem = document.querySelector('#' + idFn(onBtn));
        const offBtnElem = document.querySelector('#' + idFn(offBtn));

        let outerSubmenuStateElem;
        let outerOnStateElem;
        if (outerId) {
            outerSubmenuStateElem = document.querySelector('#' + outerFn(subState));
            outerOnStateElem = document.querySelector('#' + outerFn(onState));
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