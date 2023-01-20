import React, { useState } from "react";

export default function withHover(Element) {
    return props => {
        const [hovering, setHovering] = useState(false);

        function mouseOver() {
            setHovering(true);
        }

        function mouseOut() {
            setHovering(false);
        }

        return (
            <Element
                {...props}
                hovering={hovering}
                onMouseEnter={mouseOver}
                onMouseLeave={mouseOut}
            />
        );
    };
}
