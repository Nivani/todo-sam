import Spy = jasmine.Spy;
import state from "./../state/state";
import {Todo} from "./Todo";
import {UpdateDone} from "./present-data/UpdateDone";
import {AddItem} from "./present-data/AddItem";
import {Todos} from "./Todos";

describe("Todos", () => {
    it ("Handles adding a new item correctly.", () => {
        const underTest = new Todos();

        underTest.addItem("New item");

        expect(underTest.todos.length).toBe(1);
        expect(underTest.todos[0].done).toBe(false);
        expect(underTest.todos[0].text).toBe("New item");
    });

    it ("Handles checking and unchecking items correctly.", () => {
        const underTest = new Todos();
        underTest.addItem("Go grocery shopping");
        underTest.addItem("Mow lawn");
        underTest.addItem("Wash car");
        underTest.updateDone(1, true);

        expect(underTest.todos[0].done).toBe(false);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);

        underTest.updateDone(0, true);

        expect(underTest.todos[0].done).toBe(true);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);

        underTest.updateDone(0, false);

        expect(underTest.todos[0].done).toBe(false);
        expect(underTest.todos[1].done).toBe(true);
        expect(underTest.todos[2].done).toBe(false);
    });
});