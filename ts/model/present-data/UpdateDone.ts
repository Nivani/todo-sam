import {PresentData} from "./PresentData";
import {PresentDataVisitor} from "./Visitor";

export class UpdateDone implements PresentData {
    public constructor(
        private id: string,
        private newDoneState: boolean
    ) {}


    accept(visitor: PresentDataVisitor): void {
        visitor.visitUpdateDone(this.id, this.newDoneState);
    }
}