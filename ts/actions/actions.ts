import model from "../model/model";
import {AddItem} from "../model/present-data/AddItem";
import {UpdateDone} from "../model/present-data/UpdateDone";
import {UpdateText} from "../model/present-data/UpdateText";
import {RemoveItem} from "../model/present-data/RemoveItem";

export default {
    addItem: (text: string) => model.present(new AddItem(text)),
    updateDone: (id: string, newDoneState: boolean) => model.present(new UpdateDone(id, newDoneState)),
    updateText: (id: string, newText: string) => {
        if (newText.length === 0) {
            model.present(new RemoveItem(id));
        } else {
            model.present(new UpdateText(id, newText));
        }
    }
};