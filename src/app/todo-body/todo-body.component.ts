import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'app/model/Todos';

@Component({
  selector: 'todo-body',
  templateUrl: 'todo-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoBodyComponent {

  @Input()
  public todos: Todo[];

  @Output()
  public remove = new EventEmitter<Todo>();

  @Output()
  public setAllTo = new EventEmitter<boolean>();

  @Output()
  public toggleCompletion = new EventEmitter<Todo>();

  public get allCompleted(): boolean {
    return this.todos.find(todo => !todo.completed) ? false : true;
  }

  public stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }

  public cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  public updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.remove.emit(todo);
    }

    todo.title = editedTitle;
  }

  public editTodo(todo: Todo) {
    todo.editing = true;
  }
}
