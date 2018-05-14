import React from "react";
import { mount } from "enzyme";
import Note from "./Note";

const props = { note: { text: "test note" } };

describe("Note Component", () => {
    let note = mount(<Note {...props} />);

    it("renders the note text", () => {
        expect(note.find("li").text()).toEqual(props.note.text);
    });
});
