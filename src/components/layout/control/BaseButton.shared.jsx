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
                        ref,
                        popoverTarget, popoverTargetAction = "toggle"
}) {
    return <>
        <button disabled={disabled} id={id} role={role} data-inert={cue}
                className={styles.baseButton + (classes ? (' ' + classes) : '')}
                onClick={onClick} ref={ref}
                popoverTarget={popoverTarget}
                popoverTargetAction={popoverTargetAction} >
            {children}
        </button>
    </>
}