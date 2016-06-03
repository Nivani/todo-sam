import {Model} from "../model/model";
import view from "../view/view";

class State {

    public render(model: Model): void {
        this.representation(model);
        this.nextAction(model);
    }

    private representation(model: Model): void {
        view.display(model);
    }

    private nextAction(model: Model): void {

    }
}

export default new State();