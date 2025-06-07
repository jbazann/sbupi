import TextContainer from "@c/layout/text/TextContainer.shared.jsx";
import text from "@c/layout/text/TextContainer.module.css";
import styles from "./poem.module.css"

export default Poem

function Poem({title,content}) {
    return <>
        <TextContainer>
            <h2 className={`${text.h1} ${text.centered}`}>{title}</h2>
            <p className={styles.centeredContent}>
                {content}
            </p>
        </TextContainer>
    </>
}