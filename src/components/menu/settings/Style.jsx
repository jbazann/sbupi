import {getScopedId} from "../../../lib/common.js";
import Soon from "../bare/Soon.jsx";


export default function Style({scope}) {
    const id = getScopedId(scope)
    return <>
        <Soon />
    </>
};