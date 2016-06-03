import {Todos} from "./Todos";
import {Todo} from "./Todo";
import {PresentData} from "./present-data/PresentData";
import state from "./../state/state";

export class Model {
    private _todos = new Todos();
    get todos(): Todo[] {
        return this._todos.todos;
    }

    constructor() {
        this._todos.todos.push(new Todo("Go grocery shopping"));
        this._todos.todos.push(new Todo("Mow lawn"));
        this._todos.todos.push(new Todo("Wash car"));

        this._todos.todos[1].done = true;
    }

    public present(data: PresentData) {
        data = data || new PresentData();
        this.crud(data);
        state.render(this);
    }

    private crud(data) {
        if (data.addItem) {
            this._todos.addItem(data.addItem)
        }

        if (data.updateText) {
            this._todos.updateText(data.updateText.itemNumber, data.updateText.newText);
        }

        if (data.updateDone) {
            this._todos.updateDone(data.updateDone.itemNumber, data.updateDone.newDoneState);
        }

        if (data.removeItem) {
            this._todos.removeItem(data.removeItem);
        }

        if (data.reorderItem) {
            this._todos.reorderItem(data.reorderItem.originalNumber, data.reorderItem.newNumber);
        }
    };
}

export default new Model();