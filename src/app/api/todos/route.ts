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
