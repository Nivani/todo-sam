import {AddItem} from "./AddItem";

export interface PresentDataVisitor {
    visitAddItem(text: string): void;
    visitRemoveItem(item: number): void;
    visitUpdateText(item: number, newText: String): void;
    visitUpdateDone(item: number, newDone: boolean): void;
    visitReorderItem(originalNumber: number, newNumber: number): void;
}