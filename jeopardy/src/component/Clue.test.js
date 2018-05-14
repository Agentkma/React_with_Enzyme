import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Clue } from "./Clue";
import { clue } from "../data/fixtures";

const props = { clue };
const state = {
    show: false
};

Enzyme.configure({ adapter: new Adapter() });

describe("Clue", () => {
    let clueWrapper = shallow(<Clue {...props} />);

    it("should render the clue value...", () => {
        expect(clueWrapper.find("h4").text()).toEqual(clue.value.toString());
    });
    it("should render the clue question...", () => {
        expect(
            clueWrapper
                .find("h5")
                .at(0)
                .text()
        ).toEqual(clue.question);
    });

    it("should render the clue answer...", () => {
        expect(
            clueWrapper
                .find("h5")
                .at(1)
                .text()
        ).toEqual(clue.answer);
    });

    it("should set the answer with the `answer-hidden` className", () => {
        expect(
            clueWrapper
                .find("h5")
                .at(1)
                .hasClass("answer-hidden")
        ).toBe(true);
    });

    it("should load component with state.show = false", () => {
        expect(clueWrapper.state().show).toBe(false);
    });

    describe("when rendering a clue with NO value", () => {
        beforeEach(() => {
            props.clue.value = undefined;
            clueWrapper = shallow(<Clue {...props} />);
        });

        it("should display value as `unknown`", () => {
            expect(clueWrapper.find("h4").text()).toEqual("unknown");
        });
    });

    describe("when clicking on the Clue div", () => {
        beforeEach(() => {
            clueWrapper.simulate("click");
        });

        it("should change state.show to = true", () => {
            expect(clueWrapper.state().show).toBe(true);
        });

        it("should set the answer with the `answer-shown` className", () => {
            expect(
                clueWrapper
                    .find("h5")
                    .at(1)
                    .hasClass("answer-shown")
            ).toBe(true);
        });
    });
});
