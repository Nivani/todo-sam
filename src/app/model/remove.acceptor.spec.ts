import {Todos, Todo} from './Todos';
import {remove} from './remove.acceptor';

describe('remove acceptor', () => {
  it ('removes a todo correctly', () => {
    const todo1 = new Todo('Todo 1');
    const todo2 = new Todo('Todo 2');
    const model: Todos = {
      todos: [ todo1, todo2 ]
    };

    const updatedModel = remove(model, { remove: todo1 });

    expect(updatedModel.todos).toEqual([ todo2 ]);
  });
});
