import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import Note from "./Note.js";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
// import logo from "../logo.svg";
// <img src={logo} className="App-logo" alt="logo" />

const cookie_key = "NOTES";
class App extends Component {
    constructor() {
        super();

        this.state = {
            text: "",
            notes: []
        };

        this.sumbit = this.sumbit.bind(this);
        this.clearNotes = this.clearNotes.bind(this);
    }

    componentDidMount() {
        const notes = read_cookie(cookie_key);
        this.setState({ notes });
    }

    sumbit() {
        const { notes, text } = this.state;

        notes.push(text);

        this.setState({ notes });

        bake_cookie(cookie_key, this.state.notes);
    }

    clearNotes() {
        delete_cookie(cookie_key);
        this.setState({ notes: [] });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Note To Self</h1>
                </header>
                <Form inline>
                    <FormControl
                        onChange={event =>
                            this.setState({ text: event.target.value })
                        }
                    />
                    <Button className="btn btn-success" onClick={this.sumbit}>
                        Submit
                    </Button>
                </Form>
                <hr />
                <ul className="list-group">
                    {this.state.notes.map((note, index) => {
                    
                        return <Note key={index} note={note} />;
                    })}
                </ul>
                <hr />
                <Button className="btn btn-danger" onClick={this.clearNotes}>
                    Clear Notes
                </Button>
            </div>
        );
    }
}

export default App;
