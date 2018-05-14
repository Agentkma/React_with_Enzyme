import React, { Component } from "react";
import { Link } from "react-router-dom";
import StackList from "./Stacklist";
import logo from "../logo.svg";
import "../App.css";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Flash Card Pro</h1>
                <p className="App-intro">with Redux and Enzyme</p>
            </header>
            <hr />
            <StackList />
            <hr />

            <Link to="stack_form">
                <h4>Create a New Stack</h4>
            </Link>
        </div>
    );
};

export default App;
