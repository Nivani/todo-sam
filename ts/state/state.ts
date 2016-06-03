import {Model} from "../model/model";
import view from "../view/view";

export default {
    render: (model: Model) => {
        representation(model);
        nextAction(model);
    }
};

function representation(model: Model): void {
    view.display(model);
}

function nextAction(model: Model): void {

}