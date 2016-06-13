import {PresentData} from "./PresentData";
import {PresentDataVisitor} from "./Visitor";

export class RemoveItem implements PresentData {
    public constructor(
        private number: number
    ) {}

    accept(visitor: PresentDataVisitor): void {
        visitor.visitRemoveItem(this.number);
    }
}