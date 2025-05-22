import {devLog} from "@l/common.shared.js";
import {useEffect} from "react";

export default function StaticMenuButtonScript(
    {
        onState,
        offState,
        parentSubState,
        parentOnState,
        onBtn,
        offBtn
    }) {

    useEffect(() => {
        const onStateElem = elem(onState),
            offStateElem = elem(offState),
            onBtnElem = elem(onBtn),
            offBtnElem = elem(offBtn)

        let outerSubmenuStateElem, outerOnStateElem
        if (parentSubState && parentOnState) {
            outerSubmenuStateElem = elem(parentSubState)
            outerOnStateElem = elem(parentOnState)
        }

        let onClickHandler, offClickHandler
        onBtnElem?.addEventListener("click", onClickHandler = () => {
            if (onStateElem) onStateElem.checked = true
            if (outerSubmenuStateElem) outerSubmenuStateElem.checked = true
        })
        offBtnElem?.addEventListener("click", offClickHandler = () => {
            if (offStateElem) offStateElem.checked = true
            if (outerOnStateElem) outerOnStateElem.checked = true
        })
        return () => {
            onBtnElem?.removeEventListener("click", onClickHandler)
            offBtnElem?.removeEventListener("click", offClickHandler)
        }
    })
}

function elem(id) {
    return document.getElementById(id)
}