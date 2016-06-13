import {PresentData} from "./PresentData";
import {PresentDataVisitor} from "./Visitor";

export class UpdateDone implements PresentData {
    public constructor(
        private itemNumber: number,
        private newDoneState: boolean
    ) {}


    accept(visitor: PresentDataVisitor): void {
        visitor.visitUpdateDone(this.itemNumber, this.newDoneState);
    }
}