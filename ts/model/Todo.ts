export class Todo {
    private _id = Todo.nextId();
    get id(): string {
        return this._id;
    }

    public done = false;

    get text(): string {
        return this._text;
    }
    set text(newText: string) {
        if (!this.done) {
            this._text = newText;
        } else {
            throw "Cannot change text of completed item.";
        }
    }

    constructor(private _text: String) {}

    private static idCount = 0;
    private static nextId() {
        return Todo.idCount++;
    }
}