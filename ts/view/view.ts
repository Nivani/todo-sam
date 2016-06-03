import {Model} from "../model/model";
import {todos} from "./todos";
import {patch} from "incremental-dom";

export class View {
    public display(model: Model): void {
        const element = document.getElementById('todo-app');
        patch(element, () =>  todos(model.todos));
    }
}

export default new View();