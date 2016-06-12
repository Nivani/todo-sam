import {Todo} from "./Todo";

export class Todos {
    private _todos: Todo[] = [];
    get todos(): Todo[] {
        return this._todos;
    }

    public addItem(addItem: String): void {
        this._todos.push(new Todo(addItem));
    }

    public updateText(itemNumber: Number, newText: String): void {

    }

    public updateDone(itemNumber: Number, newDoneState: boolean): void {
        this._todos[itemNumber ].done = newDoneState;
    }

    public removeItem(removeItem: Number): void {

    }

    public reorderItem(originalNumber: Number, newNumber: Number): void {

    }
}