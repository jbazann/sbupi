import styles from "./menu-content.module.css";

export default function ({content}) {
    return (
        <div className={`flex-col center-children ${styles.menuContainer}`}>
                {content}
        </div>
    );
};