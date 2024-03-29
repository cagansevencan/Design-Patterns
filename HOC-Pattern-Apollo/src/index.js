import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";

const client = new ApolloClient({
    uri: "https://w1nso.sse.codesandbox.io/"
});

const rootElement = document.getElementById("root");

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    rootElement
);
