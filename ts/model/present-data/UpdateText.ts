import {PresentData} from "./PresentData";
import {PresentDataVisitor} from "./Visitor";

export class UpdateText implements PresentData {
    public constructor(
        private itemNumber: number,
        private newText: String
    ) {}

    accept(visitor: PresentDataVisitor): void {
        visitor.visitUpdateText(this.itemNumber, this.newText);
    }
}