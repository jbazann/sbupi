import styles from './Settings.module.css'
import ThiccButton from "../../clickable/ThiccButton.jsx";
import {getIdCounter} from "../../../lib/common.js";

const id = getIdCounter()

export default function Theme() {
    return <>
        <div className={styles.container}>
            <ThiccButton id={id()} >Dark</ThiccButton>
            <ThiccButton id={id()} >Light</ThiccButton>
        </div>
    </>
};