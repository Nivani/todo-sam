import {Todo} from "../model/Todo";
import {elementOpen} from "incremental-dom";
import {elementVoid} from "incremental-dom";
import {elementClose} from "incremental-dom";
import {text} from "incremental-dom";
import actions from "../actions/actions";

export function todos(todos: Todo[]) {
    elementOpen("div", "todos");
    todos.forEach(todo);
    newTodo(todos.length);
    elementClose("div");
}

function todo(todo: Todo) {
    const elementId = "todo-" + todo.id;
    elementOpen("div", elementId, [], "class", checkBoxWrapperClasses(todo));
        elementVoid("input", elementId + "-checkbox" + todo.id, [
            "type", "checkbox",
            "onclick", e => actions.updateDone(todo.id, e.target.checked)
        ],
        "checked", todo.done ? "checked" : null);
        text(" ");
        elementVoid("input", elementId + "-input", [
            "type", "text",
            "class", "form-control todo-item-input",
            "onblur", e => actions.updateText(todo.id, e.target.value)
        ],
        "value", todo.text,
        "disabled", todo.done ? "" : undefined);
    elementClose("div");
}

function newTodo(numberOfTodos) {
    elementOpen("div", "newTodo", ["class", "form-group"]);
        elementVoid("input", "", [
            "type", "checkbox",
            "onclick", event => event.preventDefault()
        ]);
        text(" ");
        elementVoid("input", "newItemInput" + numberOfTodos, [
            "type", "text",
            "id", "newItemInput",
            "placeholder", "New item",
            "class", "form-control todo-item-input",
            "onchange", e => {
                if (e.target.value) {
                    actions.addItem(e.target.value);
                }
            }
        ],
        "value", "");
    elementClose("div");
}

function checkBoxWrapperClasses(todo: Todo) {
    const classes = ["form-group"];
    if (todo.done) {
        classes.push("checked");
    }
    return classes.join(" ");
}