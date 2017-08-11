module.exports = class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title.trim();
    this.completed = false;
    this.editing = false;
  }
};


