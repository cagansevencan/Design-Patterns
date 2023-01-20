import { useState, useRef, useEffect } from 'react';

export default function useHover() {
    const [hovering, setHover] = useState(false);
    const ref = useRef(null);

    const handleMouseOver = () => setHover(true)
    const handleMouseOut = () => setHover(false)

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);

            return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, []);

    return [ref, hovering];
}

//ref to add a ref to the component that should receive the mouseOver and mouseLeave events, 
// and hovering in order to be able to conditionally render the Hovering! text box.