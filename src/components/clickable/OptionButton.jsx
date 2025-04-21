import styles from "./ThiccButton.module.css";

export default function OptionButton({label,id,inputId}) {
    return <>
        <button id={id} className={styles.menuButton}
            onClick={(e) => document.getElementById(inputId)?.click()}>
            {label}
        </button>
    </>
};