import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Styles/normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

// ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();