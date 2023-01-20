import React from "react";
import withHover from "./withHover";
import withLoader from "./WithLoader";


function DogImages(props) {


    return (
        <div {...props}>
            {props.hovering && <div id="hover">Hovering!</div>}
            <div id="list">
                {props.data.message.map((dog, i) => (
                    <img src={dog} key={i} alt="Dog" />
                ))}
            </div>
        </div>
    );
}

export default withHover(
    withLoader(
        DogImages,
        "https://dog.ceo/api/breeds/image/random/6")
);