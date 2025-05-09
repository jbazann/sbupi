import {createRoot} from "react-dom/client";
import {lazy} from "react";

export { onRenderClient }

const onRenderClient = async (pageContext) => {
    const { Page } = pageContext
    const roots = document.querySelectorAll('[data-hydration-root]')

    for (let root of roots) {
        const componentName = root.getAttribute('data-hydration-root')
        const data = JSON.parse(root.getAttribute('data-attributes'))
        // TODO find out whatever it is that this line is doing
        // https://github.com/vikejs/vike-react/blob/main/packages/vike-react/src/helpers/clientOnly.tsx
        const Component = lazy(() =>
            Page()[componentName].then((LoadedComponent) =>
                ('default' in LoadedComponent ? LoadedComponent : { default: LoadedComponent })))
        createRoot(root).render((<Component {...data} />))
    }
}