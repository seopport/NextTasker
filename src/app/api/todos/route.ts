import { Todo } from '@/types';

export async function GET(request: Request) {
  const response = await fetch('http://localhost:4000/todos');
  const todos: Todo[] = await response.json();

  if (!todos) {
    return (
      new Response('todo is not found'),
      {
        status: 404,
      }
    );
  }

  return Response.json({
    todos,
  });
}

export async function POST(request: Request) {
  // 들어온 데이터를 js 객체로 파싱
  const { title, contents }: { title: Todo['title']; contents: Todo['contents'] } = await request.json();

  const response = await fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    //다시 json화해서 서버 통신
    body: JSON.stringify({ title, contents, isDone: false }),
  });

  const todo = await response.json();

  if (!todo) {
    return (
      new Response('todo is not found'),
      {
        status: 404,
      }
    );
  }

  return Response.json({ todo, message: '추가되었습니다.' });
}
