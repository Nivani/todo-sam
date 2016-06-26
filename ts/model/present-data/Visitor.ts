import {AddItem} from "./AddItem";

export interface PresentDataVisitor {
    visitAddItem(text: string): void;
    visitRemoveItem(id: string): void;
    visitUpdateText(id: string, newText: String): void;
    visitUpdateDone(id: string, newDone: boolean): void;
    visitReorderItem(id: string, newPosition: number): void;
}