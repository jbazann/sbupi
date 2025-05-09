import styles from './Options.module.css'
import ActionButton, {kinds} from "../../../clickable/ActionButton.server.jsx";
import {devErr, ids} from "../../../../lib/common.js";

export default function Options({options,title}) {
    return <>
        {title ?
        <div className={styles.titleContainer}>
            <p className={styles.title}>{title}</p>
        </div> : null
        }
        <div className={title ? styles.spacedContainer : styles.container} >
            {
                options.map(opt => {
                    return <div key={opt.id} className="contents" >
                        <input id={opt.id} type={opt.check ? 'checkbox' : 'radio'}
                               name={opt.group ? opt.group : ""}
                               defaultChecked={!!opt.isDefault}
                               className={styles.input}
                               disabled={!!opt.disabled}
                        />
                        <ActionButton id={scope(opt.id,'b')} data={{inputId: opt.id}}
                                      disabled={opt.disabled} kind={kinds.Option}>
                            {opt.label}
                        </ActionButton>
                    </div>
                })
            }
        </div>

    </>
};

export class Option {
    label
    id
    value
    group
    check
    kind
    isDefault
    disabled
    constructor(label, id, value, group, kind, check, isDefault, disabled) {
        this.label = label
        this.id = id
        this.value = value
        this.group = group
        this.kind = kind
        this.check = check
        this.isDefault = isDefault
        this.disabled = disabled
    }

    static group(group, options) {
        return options.map(opt => new Option(
            opt.label ? opt.label : opt,
            opt.id ? opt.id : ids(1)[0],
            opt.value ? opt.value : opt.label ? opt.label : opt,
            group,
            opt.kind ? opt.kind : kinds.None,
            opt.check,
            opt.isDefault,
            opt.disabled
        ))
    }
}

function scope(a, b) {
    return a + 's' + b;
}