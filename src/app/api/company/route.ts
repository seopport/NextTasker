import { companyInfo } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(request: Request) {
  const response = await fetch('http://localhost:4000/companyInfo');
  const companyInfo = await response.json();

  if (!companyInfo) {
    return (
      new Response('company info is not found'),
      {
        status: 404,
      }
    );
  }

  return Response.json({ companyInfo, message: '데이터 가져오기 성공' });
}
