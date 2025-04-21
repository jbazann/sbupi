import styles from './Options.module.css'
import OptionButton from "../../../clickable/OptionButton.jsx";
import {getIdCounter} from "../../../../lib/common.js";

const key = getIdCounter()
const id = getIdCounter()

export default function Options({options,title}) {
    return <>
        {title ?
        <div className={styles.titleContainer}>
            <p className={styles.title}>{title}</p>
        </div> : null
        }
        <div className={title ? styles.spacedContainer : styles.container}>
            {
                options.map(opt => {
                    let inputKey = key()
                    return <div key={id()} className="contents">
                        <input id={id(inputKey)} type={opt.check ? 'checkbox' : 'radio'}
                               name={opt.group ? opt.group : ""}
                               onClick={(e) => {opt.action && opt.action(); e.stopPropagation()}}
                               className={styles.input}
                               defaultChecked={!!opt.isDefault}
                        />
                        <OptionButton label={opt.label} id={id()} inputId={id(inputKey)}/>
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