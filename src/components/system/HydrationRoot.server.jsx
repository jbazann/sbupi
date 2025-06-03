export default function HydrationRoot({comp,data,metadata}) {
    return <>
        <div data-hydration-root={comp} data-attributes={JSON.stringify(data)}
             data-metadata={JSON.stringify(metadata)}
             role="none" aria-hidden={true} hidden >
        </div>
    </>
}