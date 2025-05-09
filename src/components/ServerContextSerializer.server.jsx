import {useContext} from "react";

// TODO find the proper react way to do this
/**
 * Applies an extractor function to the Context value,
 * then serializes a div with the requested ID,
 * and the result returned by the extractor function.
 * This is useful when a Parent component needs to serialize
 * Context data that is produced by a Child component.
 */
export default function ServerContextSerializer({id,Context,extractor}) {
    const context = useContext(Context),
        data = extractor(context)
    return <>
        <div id={id} data-context={JSON.stringify(data)}></div>
    </>
}