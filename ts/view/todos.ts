import {Todo} from "../model/Todo";
import {elementOpen} from "incremental-dom";
import {elementVoid} from "incremental-dom";
import {elementClose} from "incremental-dom";
import {text} from "incremental-dom";
import actions from "../actions/actions";

export function todos(todos) {
    elementOpen("div", "todos");
    todos.forEach(todo);
    elementClose("div");
}

function todo(todo, index) {
    elementOpen("div", "", [], "class", checkBoxWrapperClasses(todo));
        elementOpen("label");
            elementVoid(
                "input", "", [
                    "type", "checkbox",
                    "onclick", function () {
                        actions.updateDone(index, this.checked);
                    }
                ],
                "checked", todo.done ? "checked" : null
            );
            text(todo.text);
        elementClose("label");
    elementClose("div");
}

function checkBoxWrapperClasses(todo) {
    const classes = ["checkbox" ];
    if (todo.done) {
        classes.push("checked");
    }
    return classes.join(" ");
}