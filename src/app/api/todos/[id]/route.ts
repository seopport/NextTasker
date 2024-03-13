import { Todo } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { id: Todo['id'] } }) {
  const { contents } = await request.json();
  const { id } = params;

  await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents }),
  });

  return Response.json({ message: '수정이 완료되었습니다.' });
}

//request 빼면 500 오류난다.. 왜?
export async function DELETE(request: Request, { params }: { params: { id: Todo['id'] } }) {
  const { id } = params;
  console.log(params);

  await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'DELETE',
  });

  return Response.json({ message: '삭제되었습니다.' });
}
