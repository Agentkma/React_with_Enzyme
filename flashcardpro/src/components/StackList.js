import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import stacks from "../data/stacks.json";
import { setStack, loadStacks } from "../actions";
import "../App.css";

export class StackList extends Component {
    componentDidMount() {
        if (this.props.stacks.length === 0) {
            this.props.loadStacks(stacks);
        }
    }

    render() {
        const { stacks, setStack } = this.props;
        return (
            <div className="App">
                {stacks.map(stack => {
                    return (
                        <Link
                            to="/stack"
                            key={stack.id}
                            onClick={() => {
                                setStack(stack);
                            }}
                        >
                            {" "}
                            <h4>{stack.title}</h4>
                        </Link>
                    );
                })}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        stacks: state.stacks
    };
}

// add actions to component
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setStack, loadStacks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StackList);
