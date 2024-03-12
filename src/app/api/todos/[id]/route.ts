import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

export async function DELETE(request: Request, req: NextRequest, res: NextApiResponse) {
  // const id = req.query;
  const { id } = (req as any).params;

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'DELETE',
  });

  return Response.json({ message: '삭제되었습니다.' });
}
