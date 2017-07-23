import {Todos} from './Todos';

export function remove(model: Todos, proposal: any): Todos {
  if (proposal && proposal.remove) {
    const index = model.todos.indexOf(proposal.remove);
    if (index > -1) {
      model.todos.splice(index, 1);
    }
  }

  return model;
}
