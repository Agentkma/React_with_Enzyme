import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Category, LinkedCategory } from "./Category";
import { categories, clues } from "../data/fixtures";
import { fakeServer } from "sinon";

Enzyme.configure({ adapter: new Adapter() });

const props = { category: categories[0] };

describe("Category", () => {
    let server;
    beforeEach(() => {
        server = fakeServer.create();

        server.respondWith(
            "GET",
            `http://jservice.io/api/clues?category=${props.category.id}`,
            [
                200,
                {
                    "Content-Type": "application/json"
                },
                JSON.stringify(clues)
            ]
        );
    });

    describe("when creating a new category", () => {
        let category;
        beforeEach(done => {
            category = mount(<Category {...props} />);
            server.respond();
            setTimeout(done);
        });

        it("should log the category", () => {
            category.update();
            // console.log(category.debug());
        });

        it("should initialize the clues in state", () => {
            expect(category.state().clues).toEqual(clues);
        });

        it("should render the category title", () => {
            expect(
                category
                    .find("h2")
                    .text()
                    .trim()
            ).toEqual(props.category.title);
        });

        // below test failing..Clue component not rendering in Category
        //component in console.log...but app works?
        it("should render the correct number of clues", () => {
            category.update();
            expect(category.find("Clue").length).toEqual(clues.length);
        });
    });
});

describe("LinkedCategory", () => {
    const linkedCategory = shallow(<LinkedCategory />);

    it("should create Link to navigate Home", () => {
        expect(linkedCategory.find("Link h4").text()).toEqual("Home");
    });

    it("should create the Category component", () => {
        expect(linkedCategory.find("Category").exists()).toBe(true);
    });
});
