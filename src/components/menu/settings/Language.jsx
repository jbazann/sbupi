import styles from './Settings.module.css'
import ThiccButton from "../../clickable/ThiccButton.jsx";
import {getIdCounter} from "../../../lib/common.js";

const id = getIdCounter()

export default function Language() {
    return <>
        <div className={styles.container}>
            <ThiccButton id={id()} >English</ThiccButton>
            <ThiccButton id={id()} disabled={true}>Spanish</ThiccButton>
        </div>
    </>
};