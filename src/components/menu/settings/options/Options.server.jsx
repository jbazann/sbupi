import styles from './Options.module.css'
import ActionButton, {kinds} from "@c/layout/control/ActionButton.server.jsx";
import {devErr, ids} from "@l/common.shared.js";
import {translate} from "@l/translation.shared.js";
import {useContext, useId} from "react";
import {Lang} from "@l/context.shared.js";

export default function Options({options,title,refresh = false,url = '/'}) {
    const lang = useContext(Lang)
    const baseId = useId()
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
                        <ActionButton id={scope(opt.id,'b')} data={{inputId: opt.id, ...opt.data}}
                                      disabled={opt.disabled} kind={opt.kind}>
                            {opt.label}
                        </ActionButton>
                    </div>
                })
            }
        </div>
        {refresh ?
            <div className={styles.applyContainer}>
                <ActionButton id={scope(baseId,'apply')} kind={kinds.Refresh} data={{url}}>
                    {translate(lang,'misc.apply') || 'Apply'}
                </ActionButton>
            </div> : null
        }
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
    data
    constructor(label, id, value, group, kind, check, isDefault, disabled, data) {
        this.label = label
        this.id = id
        this.value = value
        this.group = group
        this.kind = kind
        this.check = check
        this.isDefault = isDefault
        this.disabled = disabled
        this.data = data
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
            opt.disabled,
            opt.data ? opt.data : {}
        ))
    }
}

function scope(a, b) {
    return a + 's' + b;
}