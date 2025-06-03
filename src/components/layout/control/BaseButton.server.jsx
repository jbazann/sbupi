import styles from "@c/layout/control/BaseButton.module.css";

export default BaseButton

function BaseButton({
                        children,
                        id,
                        disabled,
                        role="menuitem",
                        classes=''
}) {
    return <>
        <button disabled={disabled} id={id} role={role}
                className={styles.baseButton + (classes ? (' ' + classes) : '')}>
            {children}
        </button>
    </>
}