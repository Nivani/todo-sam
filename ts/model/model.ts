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
            visitRemoveItem: item => this._todos.removeItem(item),
            visitUpdateText: (item, newText) => this._todos.updateText(item, newText),
            visitUpdateDone: (item, newDone) => this._todos.updateDone(item, newDone),
            visitReorderItem: (originalNumber, newNumber) => this._todos.reorderItem(originalNumber, newNumber)
        });
    };
}

export default new Model();