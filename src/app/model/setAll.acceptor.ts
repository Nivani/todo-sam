import {Todos} from './Todos';

export function setAll(model: Todos, proposal: any): Todos {
  if (proposal && proposal.setAll) {
    const completed = proposal.setAll;
    return Object.assign(model, {
      todos: model.todos.map(todo => {
        todo.completed = completed;
        return todo;
      })
    });
  }

  return model;
}
