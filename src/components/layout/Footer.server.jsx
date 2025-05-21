import styles from './Footer.module.css'
import {translate} from "@l/translation.server.js";
import {useContext} from "react";
import {Lang} from "@l/context.shared.js";

export default function FooterServer() {
    const lang = useContext(Lang)
    return (
        <div className={"relative-container flex-col " + styles.footingContainer}>
            <p className={"center-self " + styles.footingText}>
                {translate(lang,'misc.contact') || "contact: mail@jbazann.dev"}
            </p> {/* TODO overflow, dynamic fetch, etc etc etc*/}
        </div>
    );
};