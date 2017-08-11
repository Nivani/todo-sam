import { Todos } from './Todos';

export function todos(model: Todos, proposal: any): Todos {
  if (proposal && proposal.todos) {
    model.todos = proposal.todos;
  }
  return model;
}
