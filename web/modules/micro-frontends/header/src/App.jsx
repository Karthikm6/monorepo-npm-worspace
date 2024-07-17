import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./Header/Header";

const App = () => (
    <Header />
);
ReactDOM.render(<App />, document.getElementById("app"));
