import {Todo, Todos} from './Todos';
import {toggleCompletion} from './toggleCompletion.acceptor';

describe('toggleCompletion acceptor', () => {
  it ('toggles completed state on the presented todo', () => {
    const todo1 = new Todo('Todo 1');
    const todo2 = new Todo('Todo 2');
    const model: Todos = {
      todos: [ todo1, todo2 ]
    };

    const updatedModel = toggleCompletion(model, { toggleCompletion: todo2 });

    expect(updatedModel.todos.map(todo => todo.completed)).toEqual([false, true]);
  });
});
