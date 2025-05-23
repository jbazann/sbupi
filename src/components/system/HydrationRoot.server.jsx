export default function HydrationRoot({comp,data}) {
    return <>
        <div data-hydration-root={comp} data-attributes={JSON.stringify(data)}
             role="none" aria-hidden={true} hidden >
        </div>
    </>
}