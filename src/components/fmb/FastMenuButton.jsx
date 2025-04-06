import styles from "./FastMenuButton.module.css";
import placeholders from "../MainMenu.module.css";
import {noneState, offBtn, offState, onBtn, onState, parentContainerState} from "../../lib/common.js";
import FastMenuButtonContainer from "./FastMenuButtonContainer.jsx";


export default function FastMenuButton({label, menu, id, outerId}) {
    const idFn = (str) => id + '_' + str

    return (
        <>
            <input type="checkbox" id={idFn(parentContainerState)} className={styles.displayCheck}/>
            <div className="contents">
                <input type="radio" id={idFn(noneState)} name={id + "_state_rb"} className={styles.noneRadio}/>
                <input type="radio" id={idFn(onState)} name={id + "_state_rb"} className={styles.onRadio}/>
                <input type="radio" id={idFn(offState)} name={id + "_state_rb"} className={styles.offRadio} defaultChecked/>
                <div className={styles.contentDiv}>
                    <FastMenuButtonContainer id={id} buttons={menu}/>
                </div>
                <button id={idFn(offBtn)} className={`menu-button ${styles.closeButton}`}>Back</button>
                <button id={idFn(onBtn)} className={`menu-button ${styles.openButton}`}>{label}</button>
            </div>
            <div data-id={id} data-outerid={outerId} className={placeholders.fastMenuButtonScript}></div>
        </>
    )
}