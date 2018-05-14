import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StackForm } from "./StackForm";
import { stacks } from "../data/fixtures";

const changeTitle = "change title";
const changePrompt = "change prompt";
const changeAnswer = "change answer";

Enzyme.configure({ adapter: new Adapter() });

describe("StackForm", () => {
    const stackForm = shallow(<StackForm />);

    it("renders the Form page title ", () => {
        expect(
            stackForm
                .find("h4")
                .at(1)
                .text()
        ).toEqual("Create a New Stack");
    });

    it("renders the HOME link ", () => {
        expect(
            stackForm
                .find("h4")
                .at(0)
                .text()
        ).toEqual("HOME");
    });

    it("renders the Form component", () => {
        expect(stackForm.find("Form").exists()).toBe(true);
    });
    // since Button is a react-bootstrap button ....have to get the text via props().children
    it("renders a Button to add a new card", () => {
        expect(
            stackForm
                .find("Button")
                .at(0)
                .props().children
        ).toEqual("Add Card");
    });

    it("renders a Button to Submit the form", () => {
        expect(
            stackForm
                .find("Button")
                .at(1)
                .props().children
        ).toEqual("Save and Add Stack");
    });

    describe("and updating the title", () => {
        beforeEach(() => {
            stackForm
                .find("FormControl")
                .simulate("change", { target: { value: changeTitle } });
        });

        it("updates the title in state", () => {
            expect(stackForm.state().title).toEqual(changeTitle);
        });
    });

    describe("when adding a new card via add card Button", () => {
        beforeEach(() => {
            stackForm
                .find("Button")
                .at(0)
                .simulate("click");
        });

        afterEach(() => {
            stackForm.setState({ cards: [] });
        });

        it("adds new card to state", () => {
            expect(stackForm.state().cards.length).toEqual(1);
        });
        it("renders the prompt section", () => {
            expect(
                stackForm
                    .find("ControlLabel")
                    .at(1)
                    .props().children
            ).toEqual("Prompt:");
        });

        it("renders the answer section", () => {
            expect(
                stackForm
                    .find("ControlLabel")
                    .at(2)
                    .props().children
            ).toEqual("Answer:");
        });

        describe("and updating the card prompt", () => {
            beforeEach(() => {
                stackForm
                    .find("FormControl")
                    .at(1)
                    .simulate("change", { target: { value: changePrompt } });
            });

            it("updates the prompt in state", () => {
                expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
            });
        });

        describe("and updating the card answer", () => {
            beforeEach(() => {
                stackForm
                    .find("FormControl")
                    .at(2)
                    .simulate("change", { target: { value: changeAnswer } });
            });

            it("updates the answer in state", () => {
                expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
            });
        });
    });
});
