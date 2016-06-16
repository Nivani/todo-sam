import model from "../model/model";
import {AddItem} from "../model/present-data/AddItem";
import {UpdateDone} from "../model/present-data/UpdateDone";
import {UpdateText} from "../model/present-data/UpdateText";

export default {
    addItem: (text: string) => model.present(new AddItem(text)),
    updateDone: (itemNumber: number, newDoneState: boolean) => model.present(new UpdateDone(itemNumber, newDoneState)),
    updateText: (itemNumber: number, newText: string) => model.present(new UpdateText(itemNumber, newText))
};