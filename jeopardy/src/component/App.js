import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCategories, pickCategory } from "../actions";
import logo from "../logo.svg";
import "../App.css";

export class App extends Component {
    componentDidMount() {
        // const { setCategories } = this.props;
        if (this.props.categories.length === 0) {
            fetch("http://jservice.io/api/categories?count=20").then(response =>
                response.json().then(json => this.props.setCategories(json))
            );
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 className="App-title">Jeopardy!</h2>
                </header>
                <p className="App-intro">To get started....</p>
                <hr />
                {this.props.categories.map(category => {
                    return (
                        <div key={category.id}>
                            <Link
                                to="/category"
                                onClick={() =>
                                    this.props.pickCategory(category)
                                }
                            >
                                {" "}
                                <h4>{category.title}</h4>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}
//2nd arg obj shorthand for mapping dispatch/actions to the component
//setCategories is the action we want
export default connect(mapStateToProps, { setCategories, pickCategory })(App);
