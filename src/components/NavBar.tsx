'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
  const [isClicked, setIsClicked] = useState('');
  const navList = ['Home', 'About', 'Report', 'Todo-CSR', 'Todo-SSR'];

  return (
    <nav>
      <div className='flex bg-indigo-50 h-16 items-center justify-end'>
        <div className='mr-auto ml-10 text-2xl font-medium'>Meow Inc.</div>
        {navList.map((item, idx) => {
          return (
            <Link
              key={idx}
              onClick={() => setIsClicked(item)}
              className={`flex items-center justify-center w-20 h-10 rounded-lg mr-10
              ${isClicked === item ? 'bg-violet-300  border-solid border border-violet-400' : ''}`}
              href={item === 'Home' ? '/' : item.toLocaleLowerCase()}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
