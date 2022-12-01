import "./styles.css";
import React, { useState } from "react";

import List from "./List";
import Toggle from "./Toggle";

export const ThemeContext = React.createContext();


const themes = {
    light: {
        background: "#fff",
        color: "#000"
    },
    dark: {
        background: "#171717",
        color: "#fff"
    }
};



export default function App() {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const providerValue = {
        theme: themes[theme],
        toggleTheme
    };

    return (
        <div className={`App theme-${theme}`}>
            <ThemeContext.Provider value={providerValue}>
                <Toggle />
                <List />
            </ThemeContext.Provider>
        </div>
    );
}
