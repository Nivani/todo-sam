export class Todo {
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
}