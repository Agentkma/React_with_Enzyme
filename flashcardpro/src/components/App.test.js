import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });
//use shallow in lieu of mount because we have our entire app wrapped in the Provider context
describe("App", () => {
    const app = shallow(<App />);

    it("renders the `Flash Card Pro` title", () => {
        expect(app.find("h1").text()).toEqual("Flash Card Pro");
    });

    it("renders the StackList", () => {
        expect(app.find("Connect(StackList)").exists()).toBe(true);
    });

    it("renders a link to create new stacks", () => {
        expect(app.find("Link h4").text()).toEqual("Create a New Stack");
    });
});
