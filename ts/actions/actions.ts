import {PresentData} from "../model/present-data/PresentData";
import {UpdateDone} from "../model/present-data/UpdateDone";
import model from "../model/model";

export default {
    addItem: (text: string) => model.present(PresentData.createAddItem(text)),
    updateDone: (itemNumber: number, newDoneState: boolean) => model.present(PresentData.createUpdateDone(itemNumber, newDoneState))
};