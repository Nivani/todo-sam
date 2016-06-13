import {PresentData} from "./PresentData";
import {PresentDataVisitor} from "./Visitor";

export class AddItem implements PresentData {
    public constructor(
        private text: string
    ) {}

    accept(visitor: PresentDataVisitor): void {
        visitor.visitAddItem(this.text);
    }
}