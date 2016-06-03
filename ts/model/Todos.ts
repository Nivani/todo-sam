import {Todo} from "./Todo";

export class Todos {
    private _todos: Todo[] = [];
    get todos(): Todo[] {
        return this._todos;
    }

    public addItem(addItem: String): void {

    }

    public updateText(itemNumber: Number, newText: String): void {

    }

    public updateDone(itemNumber: Number, newDoneState: boolean): void {

    }

    public removeItem(removeItem: Number): void {

    }

    public reorderItem(originalNumber: Number, newNumber: Number): void {

    }
}