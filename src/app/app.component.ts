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
  public todos: Observable<Todo[]> = this.sam.select(model => model.todos);

  constructor(private sam: NgSAM<Todos>) {
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

  public addTodo(newTodoText: string) {
    this.sam.present({add: newTodoText});
  }
}
