import {UpdateText} from "./UpdateText";
import {ReorderTodo} from "./ReorderTodo";
import {UpdateDone} from "./UpdateDone";

export class PresentData {
    public addItem: String;
    public removeItem: number;
    public updateText: UpdateText;
    public updateDone: UpdateDone;
    public reorderItem: ReorderTodo;

    private constructor() {
    }

    public static createUpdateDone(itemNumber: number, newDoneState: boolean) {
        const result = new PresentData();
        result.updateDone = new UpdateDone(itemNumber, newDoneState);
        return result;
    }

    public static createAddItem(value: String) {
        const result = new PresentData();
        result.addItem = value;
        return result;
    }
}