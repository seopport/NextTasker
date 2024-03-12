'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
  const [isClicked, setIsClicked] = useState('');

  const handleMenuClick = (item: string) => {
    setIsClicked(item);
  };

  const navList = ['About', 'Report', 'Todo-CSR', 'Todo-SSR'];

  return (
    <nav className='flex gap-10 bg-indigo-50 h-16 items-center justify-center'>
      {navList.map((item, idx) => {
        return (
          <div
            key={idx}
            className={`flex items-center justify-center w-20 h-10 rounded-lg 
            ${isClicked === item ? 'bg-violet-300  border-solid border border-violet-400' : ''}`}
            onClick={() => handleMenuClick(item)}
          >
            <Link href={item.toLocaleLowerCase()}>{item}</Link>
          </div>
        );
      })}
    </nav>
  );
};

export default NavBar;
