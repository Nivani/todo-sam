import {Todos} from './Todos';

export function remove(model: Todos, proposal: any): Todos {
  if (proposal && proposal.remove) {
    return Object.assign(model, { todos: model.todos.filter(todo => todo !== proposal.remove) });
  } else {
    return model;
  }
}
