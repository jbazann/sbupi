import styles from "@c/layout/control/BaseButton.module.css";

export default BaseButton

function BaseButton({
                        children,
                        id,
                        disabled,
                        role="menuitem",
                        classes='',
                        onClick,
                        ref
}) {
    return <>
        <button disabled={disabled} id={id} role={role} data-inert={true}
                className={styles.baseButton + (classes ? (' ' + classes) : '')}
                onClick={onClick} ref={ref} >
            {children}
        </button>
    </>
}