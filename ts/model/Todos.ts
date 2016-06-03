import {Todo} from "./Todo";

export class Todos {
    private _todos: Todo[] = [];
    get todos(): Todo[] {
        return this._todos;
    }

    public addItem(addItem: String): void {

    }

    editItem(itemNumber: Number, newText: String): void {

    }

    removeItem(removeItem: Number): void {

    }

    reorderItem(originalNumber: Number, newNumber: Number): void {

    }
}