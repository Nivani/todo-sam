import {PresentDataVisitor} from "./Visitor";

export interface PresentData {
    accept(visitor: PresentDataVisitor): void;
}