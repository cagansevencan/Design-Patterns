import React from "react";
import { render } from "react-dom";

import DogImagesContainer from "./DogImagesContainer";
import "./styles.css";


function App() {
    return (
        <div className="App">
            <h1>Browse Dog Images{" "}
                <span role="img" aria-label="emoji"> 🐕 </span>
            </h1>
            <DogImagesContainer />
        </div>
    );
}

render(<App />, document.getElementById("root"));