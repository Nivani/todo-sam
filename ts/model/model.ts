import {Todos} from "./Todos";
import {Todo} from "./Todo";
import {PresentData} from "./present-data/PresentData";
import state from "./../state/state";

export class Model {
    private _todos = new Todos();
    get todos(): Todo[] {
        return this._todos.todos;
    }

    public present(data: PresentData) {
        this.crud(data);
        state.render(this);
    }

    private crud(data: PresentData) {
        data.accept({
            visitAddItem: text => this._todos.addItem(text),
            visitRemoveItem: id => this._todos.removeItem(id),
            visitUpdateText: (id, newText) => this._todos.updateText(id, newText),
            visitUpdateDone: (id, newDone) => this._todos.updateDone(id, newDone),
            visitReorderItem: (originalNumber, newNumber) => this._todos.reorderItem(originalNumber, newNumber)
        });
    };
}

export default new Model();