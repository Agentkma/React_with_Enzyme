import React from "react";
import { mount } from "enzyme";
import App from "./App";

const props = { note: { text: "test note" } };

describe("App Component", () => {
    let app = mount(<App {...props} />);

    it("renders the app title", () => {
        expect(app.find("h1").text()).toEqual("Note To Self");
    });
    it("renders the clear button", () => {
        expect(
            app
                .find(".btn")
                .at(2)
                .text()
        ).toEqual("Clear Notes");
    });

    describe("when rendering form", () => {
        it("creates a Form component", () => {
            expect(app.find("Form").exists()).toBe(true);
        });

        it("creates a FormControl component", () => {
            expect(app.find("FormControl").exists()).toBe(true);
        });

        it("renders the submit button", () => {
            expect(
                app
                    .find(".btn")
                    .at(1)
                    .text()
            ).toEqual("Submit");
        });
    });

    describe("when creating a note", () => {
        let testNote = "test note";

        beforeEach(() => {
            app
                .find("FormControl")
                .simulate("change", { target: { value: testNote } });
        });

        it("updates the text in state", () => {
            expect(app.state().text).toEqual(testNote);
        });

        describe("and submitting a new note", () => {
            beforeEach(() => {
                app
                    .find(".btn")
                    .at(1)
                    .simulate("click");
            });

            afterEach(() => {
                app
                    .find(".btn")
                    .at(2)
                    .simulate("click");
            });

            it("adds the new note state", () => {
                expect(app.state().notes[0]).toEqual(testNote);
            });

            describe("and remounting the component", () => {
                let app2;

                beforeEach(() => {
                    app2 = mount(<App />);
                });

                it("reads the stored note cookies ", () => {
                    console.log(app.state().notes);
                    expect(app2.state().notes).toEqual([testNote]);
                });
            });

            describe("and clicking the clear button", () => {
                beforeEach(() => {
                    app
                        .find(".btn")
                        .at(2)
                        .simulate("click");
                });

                it("removes all notes from state ", () => {
                    expect(app.state().notes).toEqual([]);
                });
            });
        });
    });
});
