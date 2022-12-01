import React from "react";
import ReactDOM from "react-dom";

// import "./styles.css";
// import "react-toastify/dist/ReactToastify.css";

// import App from "./App";



// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


import { fromEvent, merge } from "rxjs";
import { sample, mapTo } from "rxjs/operators";

import "./styles.css";

merge(
    fromEvent(document, "mousedown").pipe(mapTo(false)),
    fromEvent(document, "mousemove").pipe(mapTo(true))
)
    .pipe(sample(fromEvent(document, "mouseup")))
    .subscribe(isDragging => {
        console.log("Were you dragging?", isDragging);
    });

ReactDOM.render(
    <div className="App">Click or drag anywhere and check the console!</div>,
    document.getElementById("root")
);
