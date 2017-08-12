import { Todo, TodoFilter } from '../model/Todos';

export function filterTodos(todos: Todo[], filter: TodoFilter): Todo[] {
  if (filter === 'active') {
    return todos.filter(todo => !todo.completed);
  } else if (filter === 'completed') {
    return todos.filter(todo => todo.completed);
  } else {
    return todos;
  }
}
