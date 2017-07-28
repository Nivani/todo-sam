import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

/**
 * Child components are presentation (or dumb) components and are part of of the "View" part in SAM
 */

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
