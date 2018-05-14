import React, { Component } from "react";

class Note extends Component {
    // constructor(props) {
    //     super();
    // }

    componentDidMount() {}

    render() {
        return <li className="list-group-item"> {this.props.note}</li>;
    }
}

export default Note;
