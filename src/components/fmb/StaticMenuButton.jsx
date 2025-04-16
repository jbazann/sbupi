import styles from "./StaticMenuButton.module.css";
import global from "./MenuContainer.module.css";
import placeholders from "../MainMenu.module.css";
import MenuContainer from "./MenuContainer.jsx";
import ThiccButton from "../clickable/ThiccButton.jsx";

export const
    onBtn = 'on_button',
    offBtn = 'off_button',
    onState = 'on_state',
    offState =  'off_state',
    subState = 'submenu_state'

export const getIdFn = (_id) => (str) => _id + '_' + str

export default function StaticMenuButton({label, menu, id, outerId, disabled, clean = false}) {
    const idFn = getIdFn(id)

    return (
        <>
            <div className="contents">
                <input type="radio" id={idFn(subState)} name={id} className={`${styles.subRadio} ${global.submenuOnToggle}`}/>
                <input type="radio" id={idFn(onState)} name={id} className={`${styles.onRadio} ${global.submenuOnToggle}`}/>
                <input type="radio" id={idFn(offState)} name={id} className={styles.offRadio} defaultChecked/>
                <div className={styles.contentDiv}>
                    <MenuContainer id={id} menu={menu} clean={clean}/>
                </div>
                <ThiccButton id={idFn(offBtn)} classes={styles.closeButton}>
                    Back</ThiccButton>
                <ThiccButton disabled={disabled} id={idFn(onBtn)} classes={styles.openButton}>
                    {label}</ThiccButton>
            </div>
            <div data-id={id} data-outerid={outerId} className={placeholders.menuButtonScript}></div>
        </>
    )
}