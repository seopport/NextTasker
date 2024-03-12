import { companyInfo } from '@/types';
import Image from 'next/image';
import React from 'react';

const page = async () => {
  const response = await fetch('http://localhost:4000/companyInfo');
  const companyInfo: companyInfo = await response.json();

  console.log(companyInfo);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Image className='mb-3' width={500} height={500} src={companyInfo.image} alt='Meow 주식회사 대표이미지'></Image>
      <div className='text-2xl mb-3'>{companyInfo.name}</div>
    </div>
  );
};

export default page;
