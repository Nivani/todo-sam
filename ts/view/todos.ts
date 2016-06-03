import {Todo} from "../model/Todo";
import {elementOpen} from "incremental-dom";
import {elementVoid} from "incremental-dom";
import {elementClose} from "incremental-dom";
import {text} from "incremental-dom";

export function todos(todos) {
    elementOpen("div", "todos");
    todos.forEach(todo);
    elementClose("div");
}

function todo(todo) {
    elementOpen("div", "", [ "class", "checkbox" ]);
        elementOpen("label");
            elementVoid(
                "input", "", [ "type", "checkbox" ],
                "checked", todo.done ? "checked" : null);
            text(todo.text);
        elementClose("label");
    elementClose("div");
}