import {Todo, Todos} from './Todos';

export function add(model: Todos, proposal: any): Todos {
  if (proposal && proposal.add) {
    return { todos: model.todos.concat(new Todo(proposal.add)) };
  } else {
    return model;
  }
}
