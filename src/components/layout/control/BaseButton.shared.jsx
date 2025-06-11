import styles from "@c/layout/control/BaseButton.module.css";

export default BaseButton

function BaseButton({
                        children,
                        id,
                        disabled,
                        role="menuitem",
                        classes='',
                        onClick,
                        cue,
                        ref
}) {
    return <>
        <button disabled={disabled} id={id} role={role} data-inert={cue}
                className={styles.baseButton + (classes ? (' ' + classes) : '')}
                onClick={onClick} ref={ref} >
            {children}
        </button>
    </>
}