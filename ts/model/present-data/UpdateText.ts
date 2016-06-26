import {PresentData} from "./PresentData";
import {PresentDataVisitor} from "./Visitor";

export class UpdateText implements PresentData {
    public constructor(
        private id: string,
        private newText: String
    ) {}

    accept(visitor: PresentDataVisitor): void {
        visitor.visitUpdateText(this.id, this.newText);
    }
}