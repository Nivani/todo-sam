import {Todo, Todos} from './Todos';
import {add} from './add.acceptor';

describe('add acceptor', () => {
  it ('correctly adds a proposed item', () => {
    const todo1 = new Todo('Todo 1');
    const model: Todos = {
      todos: [ todo1 ]
    };

    const updatedModel = add(model, { add: 'Todo 2' });

    expect(updatedModel.todos).toEqual([
      todo1, new Todo('Todo 2')
    ]);
  });
});
