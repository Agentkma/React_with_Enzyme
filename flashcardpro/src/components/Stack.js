import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import stacks from "../data/stacks.json";
import "../App.css";
import Card from "./Card";

export const Stack = ({ stack: { title, cards } }) => {
    return (
        <div className="App">
            <Link to="/" className="link-home">
                <h4>HOME</h4>
            </Link>
            <h3>{title}</h3>
            <br />
            {cards.map(card => {
                return <Card card={card} key={card.id} />;
            })}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        stack: state.stack
    };
}
///no action creators on this component...so 2nd arg is null
export default connect(mapStateToProps, null)(Stack);
