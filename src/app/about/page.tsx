import { companyInfo } from '@/types';
import Image from 'next/image';
import React from 'react';
import companyImage from '../../assets/catTheKing.png';

const aboutPage = async () => {
  const response = await fetch('http://localhost:4000/companyInfo', {
    cache: 'no-cache',
  });
  const companyInfo: companyInfo = await response.json();

  console.log(companyInfo);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Image className='mb-3' width={500} height={500} src={companyInfo.image} alt='Meow 주식회사 대표이미지'></Image>
      <div className='text-2xl mb-3'>{companyInfo.name}</div>
      <div className='w-1/3 text-center leading-7'>{companyInfo.description}</div>
    </div>
  );
};

export default aboutPage;
