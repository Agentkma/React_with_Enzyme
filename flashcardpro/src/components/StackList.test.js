import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StackList } from "./StackList";
import { stacks } from "../data/fixtures";

const props = { stacks };

Enzyme.configure({ adapter: new Adapter() });

describe("Stacklist", () => {
    const stackList = shallow(<StackList {...props} />);

    it("renders the correct number of Links", () => {
        expect(stackList.find("Link").length).toEqual(props.stacks.length);
    });
});
