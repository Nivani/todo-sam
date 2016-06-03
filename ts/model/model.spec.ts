import {Model} from "./model";
import {PresentData} from "./present-data/PresentData";
import state from "./../state/state";
import Spy = jasmine.Spy;

describe("Model", () => {
    beforeEach(() => {
        state.render = jasmine.createSpy("state.render");
    });

    it ("Handles checking and unchecking an item correctly.", () => {
        const underTest = new Model();

        expect(underTest.todos[0].done).toBe(false);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);

        underTest.present(PresentData.createUpdateDone(0, true));

        expect(underTest.todos[0].done).toBe(true);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);

        expect(state.render).toHaveBeenCalled();

        (<Spy>state.render).calls.reset();

        underTest.present(PresentData.createUpdateDone(0, false));

        expect(underTest.todos[0].done).toBe(false);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);

        expect(state.render).toHaveBeenCalled();
    });
});