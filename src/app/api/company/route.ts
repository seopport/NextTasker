export async function GET(request: Request) {
  const response = await fetch('http:localhost/4000/companyInfo', {
    cache: 'no-cache',
  });
  const companyInfo = await response.json();

  if (!companyInfo) {
    return (
      new Response('company info is not found'),
      {
        status: 404,
      }
    );
  }

  console.log(companyInfo, 'd');
}
