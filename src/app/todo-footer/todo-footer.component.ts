import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo, TodoFilter } from '../model/Todos';

/**
 * Child components are presentation (or dumb) components and are part of of the "View" part in SAM
 */

@Component({
  selector: 'todo-footer',
  templateUrl: 'todo-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFooterComponent {
  @Input()
  public todos: Todo[];

  @Input()
  public filter: TodoFilter;

  @Output()
  public removeCompleted = new EventEmitter();

  @Output()
  public selectFilter = new EventEmitter<TodoFilter>();

  public get remaining(): Todo[] {
    return this.getWithCompleted(false);
  }

  public get completed(): Todo[] {
    return this.getWithCompleted(true);
  }

  private getWithCompleted(completed: boolean): Todo[] {
    if (this.todos) {
      return this.todos.filter((todo: Todo) => todo.completed === completed);
    } else {
      return [];
    }
  }
}
