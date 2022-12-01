import React from "react"
import ListItem from "./ListItem"

export default function Boxes() {
    return (
        <ul className="list">
            {new Array(10).fill(0).map((_, i) => (
                <ListItem key={i} />
            ))}
        </ul>
    )
}
