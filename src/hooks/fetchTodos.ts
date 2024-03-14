import { Todo } from '@/types';

export const fetchTodos = async () => {
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
  });
  const { todos }: { todos: Todo[] } = await response.json();
  return todos;
};
