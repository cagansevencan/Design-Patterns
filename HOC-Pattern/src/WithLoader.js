import React, { useEffect, useState } from "react";

export default function withLoader(Element, url) {
    return (props) => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data));
        }, []);


        if (!data) {
            return <div>
                <span style={{ animationDelay: `${0.05}s`, animationDuration: "1s", color: "white" }}>Loading...</span>
            </div>
        }
        return <Element {...props} data={data} />
    };
}

