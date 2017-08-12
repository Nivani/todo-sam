import { Todo } from '../model/Todos';
import { filterTodos } from './filterTodos.selector';

describe('filterTodos selector', () => {
  it('filters active todos correctly', () => {
    const todos: Todo[] = [
      {id: '1', title: 'Todo 1', completed: false, editing: false},
      {id: '2', title: 'Todo 2', completed: true, editing: false},
      {id: '3', title: 'Todo 3', completed: false, editing: false}
    ];

    const result = filterTodos(todos, 'active');

    expect(result).toEqual([todos[0], todos[2]]);
  });

  it('filters completed todos correctly', () => {
    const todos: Todo[] = [
      {id: '1', title: 'Todo 1', completed: false, editing: false},
      {id: '2', title: 'Todo 2', completed: true, editing: false},
      {id: '3', title: 'Todo 3', completed: false, editing: false}
    ];

    const result = filterTodos(todos, 'completed');

    expect(result).toEqual([todos[1]]);
  });

  it('doesn\'t filter todos when no filter is specified', () => {
    const todos: Todo[] = [
      {id: '1', title: 'Todo 1', completed: false, editing: false},
      {id: '2', title: 'Todo 2', completed: true, editing: false}
    ];

    const result = filterTodos(todos, '');

    expect(result).toEqual(todos);
  });
});
