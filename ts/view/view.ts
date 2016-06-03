import {Model} from "../model/model";
import {todos} from "./todos";
import {patch} from "incremental-dom";

export default {
    display: (model: Model) => {
        const element = document.getElementById('todo-app');
        patch(element, () =>  todos(model.todos));
    }
};