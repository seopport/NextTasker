import { Todo } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { id: Todo['id'] } }) {
  const { contents, isDone } = await request.json();

  const id = { params };

  await fetch(`http://localhost:4000/todos${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents, isDone }),
  });

  return Response.json({ message: '수정이 완료되었습니다.' });
}

export async function DELETE({ params }: { params: { id: Todo['id'] } }) {
  const { id } = params;

  await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'DELETE',
  });

  return Response.json({ message: '삭제되었습니다.' });
}
