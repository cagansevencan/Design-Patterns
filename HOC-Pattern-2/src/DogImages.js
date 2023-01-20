import React from "react";
import withLoader from "./WithLoader";
import useHover from "./useHover";

function DogImages(props) {
    const [hoverRef, hovering] = useHover();
    return (
        <div ref={hoverRef} {...props}>
            {hovering && <div id="hover">Hovering!</div>}
            <div id="list">
                {props.data.message.map((dog, i) => (
                    <img src={dog} key={i} alt="Dog" />
                ))}
            </div>
        </div>
    );
}

export default withLoader(
    DogImages,
    "https://dog.ceo/api/breeds/image/random/6");