import Spy = jasmine.Spy;
import state from "./../state/state";
import {Model} from "./model";
import {Todo} from "./Todo";
import {UpdateDone} from "./present-data/UpdateDone";
import {AddItem} from "./present-data/AddItem";

describe("Model", () => {
    beforeEach(() => {
        state.render = jasmine.createSpy("state.render");
    });

    it ("Handles checking and unchecking an item correctly.", () => {
        const underTest = new Model();
        underTest.todos.push(new Todo("Go grocery shopping"));
        underTest.todos.push(new Todo("Mow lawn"));
        underTest.todos.push(new Todo("Wash car"));
        underTest.todos[1].done = true;

        expect(underTest.todos[0].done).toBe(false);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);

        underTest.present(new UpdateDone(0, true));

        expect(underTest.todos[0].done).toBe(true);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);

        expect(state.render).toHaveBeenCalled();

        (<Spy>state.render).calls.reset();

        underTest.present(new UpdateDone(0, false));

        expect(underTest.todos[0].done).toBe(false);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);

        expect(state.render).toHaveBeenCalled();
    });

    it ("Handles adding a new item correctly.", () => {
        const underTest = new Model();

        underTest.present(new AddItem("New item"));

        expect(underTest.todos.length).toBe(1);
        expect(underTest.todos[0].done).toBe(false);
        expect(underTest.todos[0].text).toBe("New item");
    });
});