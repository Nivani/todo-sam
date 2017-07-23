import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/Todos';

@Component({
  selector: 'todo-footer',
  templateUrl: 'todo-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFooterComponent {
  @Input()
  public todos: Todo[];

  @Output()
  public removeCompleted = new EventEmitter();

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
