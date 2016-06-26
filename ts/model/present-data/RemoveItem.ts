import {PresentData} from "./PresentData";
import {PresentDataVisitor} from "./Visitor";

export class RemoveItem implements PresentData {
    public constructor(
        private id: string
    ) {}

    accept(visitor: PresentDataVisitor): void {
        visitor.visitRemoveItem(this.id);
    }
}