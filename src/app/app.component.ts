import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Todo, Todos } from './model/Todos';
import { NgSAM } from '../sam/angular/NgSAM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public newTodoText = '';

  public todos: Observable<Todo[]> = this.sam.select(model => model.todos);

  public allCompleted: Observable<boolean> = this.sam.select(model => model.todos.find(todo => !todo.completed) ? false : true);

  public remaining: Observable<Todo[]> = this.getWithCompleted(false);
  public completed: Observable<Todo[]> = this.getWithCompleted(true);

  private getWithCompleted(completed: boolean): Observable<Todo[]> {
    return this.todos.map(todos => todos.filter((todo: Todo) => todo.completed === completed));
  }

  constructor(private sam: NgSAM<Todos>) {
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
      return this.remove(todo);
    }

    todo.title = editedTitle;
  }

  public editTodo(todo: Todo) {
    todo.editing = true;
  }

  public setAllTo(completed: boolean) {
    this.sam.present({setAll: completed});
  }

  public removeCompleted() {
    this.sam.present({type: 'REMOVE_COMPLETED'});
  }

  public toggleCompletion(todo: Todo) {
    this.sam.present({toggleCompletion: todo});
  }

  public remove(todo: Todo) {
    this.sam.present({remove: todo});
  }

  public addTodo() {
    if (this.newTodoText.trim().length) {
      this.sam.present({add: this.newTodoText});
      this.newTodoText = '';
    }
  }
}
