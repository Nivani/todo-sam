import {Todo} from "./Todo";

export class Todos {
    private _todos: Todo[] = [];
    get todos(): Todo[] {
        return this._todos;
    }

    public addItem(addItem: String): void {
        this._todos.push(new Todo(addItem));
    }

    public updateText(id: string, newText: String): void {
        this.withTodoWithId(id, item => item.text = newText);
    }

    public updateDone(id: string, newDoneState: boolean): void {
        this.withTodoWithId(id, item => item.done = newDoneState);
    }

    public removeItem(id: string): void {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index > -1) {
            this._todos.splice(index, 1);
        }
    }

    public reorderItem(id: string, newPosition: number): void {
        if (newPosition < 0 || newPosition > this.todos.length - 1) {
            throw "Invalid item position " + newPosition;
        }

        this.withTodoIndex(id, index => {
            this.todos.splice(newPosition, 0, this.todos.splice(index, 1)[0]);
        });
    }

    private withTodoWithId(id: string, action: (Todo) => void) {
        const item = this.todos.find(todo => todo.id === id);
        if (item) {
            action(item);
        } else {
            throw "Unknown todo id " + id;
        }
    }

    private withTodoIndex(id: string, action: (number) => void) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index > -1) {
            action(index);
        } else {
            throw "Unknown todo id " + id;
        }
    }
}