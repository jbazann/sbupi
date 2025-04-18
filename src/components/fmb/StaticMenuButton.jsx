import styles from "./StaticMenuButton.module.css";
import global from "../menu/MenuContainer.module.css";
import placeholders from "../menu/main/MainMenu.module.css";
import MenuContainer from "../menu/MenuContainer.jsx";
import ThiccButton from "../clickable/ThiccButton.jsx";
import {getIdCounter} from "../../lib/common.js";

export const
    onBtn = 'on_button',
    offBtn = 'off_button',
    onState = 'on_state',
    offState =  'off_state',
    subState = 'submenu_state'

export default function StaticMenuButton({label, id, menu, outerId, disabled, clean = false}) {
    const idFn = getIdCounter(id)
    return <>
        <div className="contents">
            <input type="radio" id={idFn(subState)} name={id} className={`${styles.subRadio} ${global.submenuOnToggle}`}/>
            <input type="radio" id={idFn(onState)} name={id} className={`${styles.onRadio} ${global.submenuOnToggle}`}/>
            <input type="radio" id={idFn(offState)} name={id} className={styles.offRadio} defaultChecked/>
            <div className={styles.contentDiv}>
                <MenuContainer menu={menu} clean={clean}/>
            </div>
            <ThiccButton id={idFn(offBtn)} classes={styles.closeButton}>
                Back</ThiccButton>
            <ThiccButton disabled={disabled} id={idFn(onBtn)} classes={styles.openButton}>
                {label}</ThiccButton>
        </div>
        <div data-id={id} data-outerid={outerId} className={placeholders.menuButtonScript}></div>
    </>
}