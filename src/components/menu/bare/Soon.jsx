import TextContainer from "../../text/TextContainer.jsx";
import styles from '../../text/TextContainer.module.css'

export default function Soon() {
    return <>
        <TextContainer>
            <h2 className={styles.h1}>
                Coming Soon!
            </h2>
            <div className="hr"></div>
        </TextContainer>
    </>
};