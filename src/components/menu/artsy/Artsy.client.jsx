import {useState} from "react";

export default function Artsy({data}) {
    const [entries, setEntries] = useState([]);

    return <>
        {
            entries.map((entry, index) => (
                <>
                    
                </>
            ))
        }
    </>
};