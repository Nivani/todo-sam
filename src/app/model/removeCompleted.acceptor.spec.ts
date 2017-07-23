import {Todo, Todos} from './Todos';
import {removeCompleted} from './removeCompleted.acceptor';

describe('removeCompleted acceptor', () => {
  it ('removes completed todos', () => {
    const todo1 = new Todo('Todo 1');
    todo1.completed = true;
    const todo2 = new Todo('Todo 2');
    const todo3 = new Todo('Todo 3');
    todo3.completed = true;
    const model: Todos = {
      todos: [ todo1, todo2, todo3 ]
    };

    const updatedModel = removeCompleted(model, { type: 'REMOVE_COMPLETED' });

    expect(updatedModel.todos).toEqual([todo2]);
    expect(todo2.completed).toEqual(false);
  });
});
