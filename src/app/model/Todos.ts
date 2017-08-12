export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  editing: boolean;
}

export type TodoFilter = '' | 'active' | 'completed';

export interface Todos {
  todos: Array<Todo>;
  filter: TodoFilter;
}

export const initialModel: Todos = {
  todos: [],
  filter: ''
};
