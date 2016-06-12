import {Todo} from "../model/Todo";
import {elementOpen} from "incremental-dom";
import {elementVoid} from "incremental-dom";
import {elementClose} from "incremental-dom";
import {text} from "incremental-dom";
import actions from "../actions/actions";

export function todos(todos: Todo[]) {
    elementOpen("div", "todos");
    todos.forEach(todo);
    newTodo();
    elementClose("div");
}

function todo(todo: Todo, index: number) {
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

function newTodo() {
    elementOpen("div", "", []);
        elementVoid(
            "input", "", [
                "type", "checkbox",
                "onclick", event => event.preventDefault()
            ]
        );
        text(" ");
        elementVoid(
            "input", "", [
                "type", "text",
                "id", "newItemInput",
                "placeholder", "New item",
                "class", "form-control new-item-input",
            ]
        );
        text(" ");
        elementOpen(
            "button", "", [
                "class", "btn btn-primary",
                "onclick", function () {
                    const text = document.getElementById("newItemInput").value;
                    actions.addItem(text);
                }
            ]);
        text("+");
        elementClose("button");
    elementClose("div");
}

function checkBoxWrapperClasses(todo: Todo) {
    const classes = ["checkbox"];
    if (todo.done) {
        classes.push("checked");
    }
    return classes.join(" ");
}