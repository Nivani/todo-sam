import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from '../model/todos';

@Injectable()
export class TodoService {
  constructor(private http: Http) {
  }

  public getTodos(): Promise<Todo[]> {
    return this.http.get('/api/todos')
      .map(response => response.json())
      .toPromise();
  }

  public addTodo(title: string): Promise<Todo[]> {
    return this.http.post('/api/todos/add', {add: title})
      .map(response => response.json())
      .toPromise();
  }

  public removeTodo(todoId: string): Promise<Todo[]> {
    return this.http.delete(`/api/todos/${todoId}`)
      .map(response => response.json())
      .toPromise();
  }

  public updateTitle(todoId: string, newTitle: string): Promise<Todo[]> {
    return this.http.put(`/api/todos/${todoId}/title`, { title: newTitle })
      .map(response => response.json())
      .toPromise();
  }

  public toggleCompletion(todoId: string): Promise<Todo[]> {
    return this.http.post(`/api/todos/${todoId}/toggleCompletion`, '')
      .map(response => response.json())
      .toPromise();
  }

  public removeCompleted(): Promise<Todo[]> {
    return this.http.post(`/api/todos/removeCompleted`, '')
      .map(response => response.json())
      .toPromise();
  }

  public setAll(completed: boolean): Promise<Todo[]> {
    return this.http.post(`/api/todos/setAll`, {completed: completed})
      .map(response => response.json())
      .toPromise();
  }
}
