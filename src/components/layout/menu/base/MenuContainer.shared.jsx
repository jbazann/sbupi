import styles from "@c/layout/menu/base/MenuContainer.module.css";

export default MenuContainer

function MenuContainer({
                           children,
                           BackButton,
                           bare=false,
                           owns = ''
}) {
    if (!BackButton)
        return <MainMenuContainer children={children} bare={bare} />
    return <>
        <div className={styles.containerContainer} role={"presentation"}>
            <div className={bare ? styles.bareContainer : styles.menuContainer}
                 role={bare ? "presentation" : "menu"} aria-owns={owns} >
                {children}
            </div>
            {bare ?
                <div className={"contents"} role={"menu"}>
                    <BackButton />
                </div> :
                <BackButton />
            }
        </div>
    </>
}

function MainMenuContainer({children, bare}) {
    return <>
        <div className={bare ? styles.bareContainer : styles.menuContainer}
             role={bare ? "presentation" : "menu"}>
            {children}
        </div>
    </>
}