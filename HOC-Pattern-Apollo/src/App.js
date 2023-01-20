import React from "react";
import "./styles.css";

import InputHOC from "./InputHOC";
import InputHooks from "./InputHooks";

export default function App() {
    return (
        <div className="App">
            <div className="col">
                <h3>HOC</h3>
                <InputHOC />
            </div>
            <div className="col">
                <h3>Hooks</h3>
                <InputHooks />
            </div>
        </div>
    );
}
