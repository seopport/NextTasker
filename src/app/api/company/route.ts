import { CompanyInfo } from '@/types';

export async function GET(request: Request) {
  const response = await fetch('http://localhost:4000/companyInfo');
  const companyInfo: CompanyInfo = await response.json();

  if (!companyInfo) {
    return (
      new Response('company info is not found'),
      {
        status: 404,
      }
    );
  }

  console.log(Response.json({ companyInfo, message: '데이터 가져오기 성공', status: 201 }));

  return Response.json({ companyInfo, message: '데이터 가져오기 성공', status: 201 });
}
