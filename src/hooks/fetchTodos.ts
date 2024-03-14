import { Todo } from '@/types';

export const fetchTodos = async () => {
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
  });
  const { todos }: { todos: Todo[] } = await response.json();
  return todos;
};

export const modifyTodo = async ({
  modifyContent,
  targetTodo,
  isDone,
}: {
  modifyContent: Todo['contents'] | undefined;
  targetTodo: Todo | undefined;
  isDone: Todo['isDone'] | undefined;
}) => {
  console.log(modifyContent, targetTodo);
  const response = await fetch(`http://localhost:3000/api/todos/${targetTodo?.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ contents: modifyContent }),
  });

  if (!response.ok) {
    throw new Error('Failed to modify the todo item');
  }

  // 백엔드에서 보내준 응답을 받아서 alert
  const result = await response.json();
  alert(result.message);
};