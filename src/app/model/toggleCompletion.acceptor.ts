import {Todos} from './Todos';

export function toggleCompletion(model: Todos, proposal: any): Todos {
  if (proposal && proposal.toggleCompletion) {
    model.todos = model.todos.map(todo => {
      if (todo === proposal.toggleCompletion) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  return model;
}
