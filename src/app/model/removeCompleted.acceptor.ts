import {Todos} from './Todos';

export function removeCompleted(model: Todos, proposal: any): Todos {
  if (proposal && proposal.type === 'REMOVE_COMPLETED') {
    model.todos = model.todos.filter(todo => !todo.completed);
  }

  return model;
}
