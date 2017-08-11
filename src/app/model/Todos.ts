export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  editing: boolean;
}

export interface Todos {
  todos: Array<Todo>;
}

export const initialModel: Todos = {todos: []};
