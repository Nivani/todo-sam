import Spy = jasmine.Spy;
import state from "./../state/state";
import {Model} from "./model";
import {Todo} from "./Todo";
import {UpdateDone} from "./present-data/UpdateDone";
import {AddItem} from "./present-data/AddItem";

describe("Model", () => {
    beforeEach(() => {
        state.render = jasmine.createSpy("state.render");
    });

    it ("Model.present() calls state.render().", () => {
        const underTest = new Model();

        expect(state.render).not.toHaveBeenCalled();

        underTest.present(new AddItem("New item"));

        expect(state.render).toHaveBeenCalled();
    });
});