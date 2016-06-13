import {PresentData} from "./PresentData";
import {PresentDataVisitor} from "./Visitor";

export class ReorderTodo implements PresentData {
    private constructor(
        private originalNumber: number,
        private newNumber: number
    ) {}

    accept(visitor: PresentDataVisitor): void {
        visitor.visitReorderItem(this.originalNumber, this.newNumber);
    }
}