import {useEffect} from "react";
import {rmDoc, setDoc} from "../../lib/stores.js";
import {ready} from "../../lib/enum.js";
import {devErr, devLog} from "../../lib/common.js";
import {PostContentTaskMap} from "./PreContentScript.jsx";

export default function PostContentScript() {
    // Run scheduled tasks
    useEffect(() => {
        for (const [key,task] of PostContentTaskMap.entries()) {
            devLog({key}, class PostContentSchedule{}.prototype)
            if (task.run instanceof Function) {
                task.run()
            } else {
                devLog({task}, class Error{}.prototype)
                devErr("task.run must be a function.")
            }
        }
    }, []);

    // Set data-ready HTML attribute for CSS
    useEffect(() => {
        setDoc(ready.key,ready.val)

        return () => {
            rmDoc(ready.key)
        }
    }, []);
};