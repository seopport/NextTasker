import { CompanyInfo } from '@/types';
import Image from 'next/image';
import React from 'react';

const aboutPage = async () => {
  const response = await fetch('http://localhost:3000/api/company', {
    method: 'GET',
  });
  const { companyInfo }: { companyInfo: CompanyInfo } = await response.json();

  return (
    <div className=''>
      <div className=' min-h-screen flex flex-row justify-center items-center'>
        <Image className='mr-9 mb-3' width={500} height={500} src={companyInfo.image} alt='Meow 주식회사 대표이미지' />
        <div className='items-start w-3/12'>
          <div className='text-2xl mb-3 w-fit'>{companyInfo.name}</div>
          <div className='w-full leading-7'>{companyInfo.description}</div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
