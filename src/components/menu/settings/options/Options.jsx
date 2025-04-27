import styles from './Options.module.css'
import OptionButton from "../../../clickable/OptionButton.jsx";
import {devErr, getScopedId} from "../../../../lib/common.js";
import {useEffect, useRef, useState} from "react";
import {PostContentTaskMap} from "../../../script/PreContentScript.jsx";

export default function Options({options,title,scope}) {
    const id = getScopedId(scope)
    let idCounter = 0
    return <>
        {title ?
        <div className={styles.titleContainer}>
            <p className={styles.title}>{title}</p>
        </div> : null
        }
        <div className={title ? styles.spacedContainer : styles.container} >
            {
                options.map(opt => {
                    let inputId = id(idCounter++)
                    const ref = useRef(null)
                    useEffect(() => {{
                        ref.current.checked = !!opt.isDefault
                    }})
                    return <div key={id(idCounter++)} className="contents" >
                        <input id={inputId} type={opt.check ? 'checkbox' : 'radio'}
                               name={opt.group ? opt.group : ""}
                               onClick={(e) => {opt.action && opt.action(); e.stopPropagation()}}
                               className={styles.input}
                               ref={ref}
                        />
                        <OptionButton label={opt.label} id={id(idCounter++)} inputId={inputId}/>
                    </div>
                })
            }
        </div>

    </>
};

export class Option {
    label
    value
    group
    check
    action
    isDefault
    constructor(label, value, group, action, check, isDefault) {
        this.label = label
        this.value = value
        this.group = group
        this.action = action
        this.check = check
        this.isDefault = isDefault
    }

    static group(group, options) {
        return options.map(opt => new Option(
            opt.label ? opt.label : opt,
            opt.value ? opt.value : opt.label ? opt.label : opt,
            group,
            opt.action ? opt.action : noop,
            opt.check,
            opt.isDefault
        ))
    }
}

function noop() {}