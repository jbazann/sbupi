
export default function HydrationRoot({children,comp,data}) {
    return <>
        <div data-hydration-root={comp} data-attributes={JSON.stringify(data)} >
            {children}
        </div>
    </>
};