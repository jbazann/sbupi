import {useEffect, useRef, useState} from "react";

export default TextLoadingIndicator

function TextLoadingIndicator({labels,interval = 2*222}) {
    const counter = useRef(1)
    const [label, setLabel] = useState(labels[0])
    useEffect(() => {
        const intervalId = setInterval( () => {
                setLabel(labels[counter.current < labels.length ? counter.current++ : reset(counter)])
            }, interval)
        return () => {
            clearInterval(intervalId)
        }
    }, [labels])
    return <div>
        <p>{label}</p>
    </div>
}

function reset(counterRef) {
    counterRef.current = 1
    return 0
}