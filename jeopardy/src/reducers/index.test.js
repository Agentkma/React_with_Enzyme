import rootReducer from "./index";
import * as actions from "../actions";
import { category, categories } from "../data/fixtures";

describe("rootReducer", () => {
    it("should return the initial state", () => {
        expect(rootReducer({}, {})).toEqual({ categories: [], category: {} });
    });

    it("should set initial categories", () => {
        expect(
            rootReducer({}, { type: actions.SET_CATEGORIES, categories })
        ).toEqual({ categories, category: {} });
    });
    // The below test not passing???
    it("should pick a category", () => {
        expect(
            rootReducer({}, { type: actions.PICK_CATEGORY, category })
        ).toEqual({ categories: [], category });
    });
});
