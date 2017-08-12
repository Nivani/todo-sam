import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/combineLatest';
import { Component } from '@angular/core';
import { Todo, TodoFilter, Todos } from './model/Todos';
import { NgSAM } from '../sam/angular/NgSAM';
import { TodoService } from './remote/TodoService';
import { filterTodos } from './selectors/filterTodos.selector';

/**
 * Root component has responsibility of the "State" part in SAM:
 * - Compute state representation using sam.select(...)
 * - Process the next-action predicate also using sam.select(...)
 * - Map view events to actions which present data to the model
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Observable<Todo[]> = this.sam.select(model => model.todos);

  public filteredTodos: Observable<Todo[]> = this.todos.combineLatest(
    this.sam.select(model => model.filter),
    filterTodos
  );

  public filter: Observable<TodoFilter> = this.sam.select(model => model.filter);

  constructor(private sam: NgSAM<Todos>, private todoService: TodoService) {
    todoService.getTodos().then(todos => this.presentTodos(todos));
  }

  private presentTodos(todos) {
    this.sam.present({todos: todos});
  }

  public setAllTo(completed: boolean) {
    this.todoService.setAll(completed).then(todos => this.presentTodos(todos));
  }

  public removeCompleted() {
    this.todoService.removeCompleted().then(todos => this.presentTodos(todos));
  }

  public toggleCompletion(todo: Todo) {
    this.todoService.toggleCompletion(todo.id).then(todos => this.presentTodos(todos));
  }

  public remove(todo: Todo) {
    this.todoService.removeTodo(todo.id).then(todos => this.presentTodos(todos));
  }

  public addTodo(newTodoText: string) {
    this.todoService.addTodo(newTodoText).then(todos => this.presentTodos(todos));
  }

  public updateTitle(todoId: string, newTitle: string) {
    this.todoService.updateTitle(todoId, newTitle).then(todos => this.presentTodos(todos));
  }

  public selectFilter(newFilter: TodoFilter) {
    this.sam.present({ filter: newFilter });
  }
}
