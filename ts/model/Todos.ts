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
        this.withTodoAtIndex(itemNumber, item => item.text = newText);
    }

    public updateDone(itemNumber: Number, newDoneState: boolean): void {
        this.withTodoAtIndex(itemNumber, item => item.done = newDoneState);
    }

    public removeItem(itemNumber: Number): void {
        if (itemNumber >= 0 && itemNumber < this.todos.length) {
            this._todos.splice(itemNumber, 1);
        }
    }

    public reorderItem(originalNumber: Number, newNumber: Number): void {

    }

    private withTodoAtIndex(itemNumber: number, action: (Todo) => void) {
        const item = this._todos[itemNumber];
        if (item) {
            action(item);
        } else {
            throw "Unknown itemNumber " + itemNumber;
        }
    }
}