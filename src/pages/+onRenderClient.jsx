import {createRoot} from "react-dom/client";
import {lazy} from "react";
import {devLog} from "@l/common.shared.js";

export { onRenderClient }

const onRenderClient = async (pageContext) => {
    const { Page } = pageContext
    const roots = document.querySelectorAll('[data-hydration-root]')

    for (let root of roots) {
        const name = root.getAttribute('data-hydration-root'),
            data = JSON.parse(root.getAttribute('data-attributes')),
            meta = JSON.parse(root.getAttribute('data-metadata'))

        devLog(name,'RENDERING COMPONENT')
        devLog(data,'WITH DATA')
        devLog(meta,'WITH METADATA')

        const Component = lazy(() => {
            devLog(name,'LAZY LOADING')
            return Page()[name].then((LoadedComponent) =>
                // TODO find out whatever it is that this lambda is doing
                // https://github.com/vikejs/vike-react/blob/main/packages/vike-react/src/helpers/clientOnly.tsx
                ('default' in LoadedComponent ? LoadedComponent : { default: LoadedComponent }))
        })
        createRoot(root).render((<Component {...data} />))
    }
}