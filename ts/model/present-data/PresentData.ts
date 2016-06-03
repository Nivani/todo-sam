import {UpdateText} from "./UpdateText";
import {ReorderTodo} from "./ReorderTodo";
import {UpdateDone} from "./UpdateDone";

export class PresentData {
    public addItem: String;
    public removeItem: number;
    public updateText: UpdateText;
    public updateDone: UpdateDone;
    public reorderItem: ReorderTodo;
}