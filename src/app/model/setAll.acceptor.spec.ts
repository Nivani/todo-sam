import {Todo, Todos} from './Todos';
import {setAll} from './setAll.acceptor';

describe('setAll acceptor', () => {
  it ('sets all completed states', () => {
    const todo1 = new Todo('Todo 1');
    const todo2 = new Todo('Todo 2');
    todo2.completed = true;
    const todo3 = new Todo('Todo 3');
    const model: Todos = {
      todos: [ todo1, todo2, todo3 ]
    };

    const updatedModel = setAll(model, { setAll: true });

    expect(updatedModel.todos.map(todo => todo.completed)).toEqual([ true, true, true ]);
  });
});
