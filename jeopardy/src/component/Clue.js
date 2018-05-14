import React, { Component } from "react";

export class Clue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    toggleAnswer() {
        const { show } = this.state;
        this.setState({ show: true });
    }

    render() {
        const { answer, question, value } = this.props.clue;
        return (
            <div className="clue" onClick={() => this.toggleAnswer()}>
                <h4>{value || "unknown"}</h4>
                <hr />
                <h5>{question}</h5>
                <hr />
                <h5
                    className={
                        this.state.show ? "answer-shown" : "answer-hidden"
                    }
                >
                    {answer}
                </h5>
            </div>
        );
    }
}

export default Clue;
