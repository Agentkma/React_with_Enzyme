import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Stack } from "./Stack";
import { stack } from "../data/fixtures";

//have to create a props for testing purposaed that match the props in the Stack component
const props = { stack };

Enzyme.configure({ adapter: new Adapter() });

describe("Stack", () => {
    const stack = shallow(<Stack {...props} />);

    it("renders the title", () => {
        //console.log(stack.debug())
        expect(stack.find("h3").text()).toEqual(props.stack.title);
    });

    it("renders the Link home", () => {
        //console.log(stack.debug())
        expect(stack.find("Link h4").text()).toEqual("HOME");
    });

    it("renders the correct number of Cards", () => {
        expect(stack.find("Card").length).toEqual(props.stack.cards.length);
    });
});
