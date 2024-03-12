import { Todo } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(request: Request) {
  const response = await fetch('http://localhost:4000/todos');
  const todos = await response.json();

  if (!todos) {
    return (
      new Response('todo is not found'),
      {
        status: 404,
      }
    );
  }

  console.log('여긴찍히나?');

  return Response.json({
    todos,
  });
}

export async function POST(request: Request) {
  const { title, contents } = await request.json();

  const response = await fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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

  return Response.json({ todo });
}

export async function PATCH(request: Request) {
  const { contents, isDone } = await request.json();

  const response = await fetch('http://localhost:4000/todos', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents, isDone }),
  });

  return Response.json({ message: '수정이 완료되었습니다.' });
}

// export async function DELETE(request: Request, req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;
//   //   const { id } = await request.json();

//   console.log(id, '여기다여기');

//   const response = await fetch(`http://localhost:4000/todos/${id}`, {
//     method: 'DELETE',
//   });

//   if (response.ok) {
//     return res.json({ message: '삭제되었습니다.' });
//   } else {
//     // 에러 처리
//     return res.status(500).json({ message: '서버에서 요소를 삭제하는 데 실패했습니다.' });
//   }
// }
