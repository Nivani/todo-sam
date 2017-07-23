import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: 'todo-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoHeaderComponent {
  public newTodoText = '';

  @Output()
  public add = new EventEmitter<string>();

  public addTodo() {
    if (this.newTodoText.trim().length) {
      this.add.next(this.newTodoText);
      this.newTodoText = '';
    }
  }
}
