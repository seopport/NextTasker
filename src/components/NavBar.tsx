'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
  const [isClicked, setIsClicked] = useState('');
  const navList = ['Home', 'About', 'Report', 'Todo-CSR', 'Todo-SSR'];

  return (
    <nav className='flex gap-10 bg-indigo-50 h-16 items-center justify-center'>
      {navList.map((item, idx) => {
        return (
          <Link
            key={idx}
            onClick={() => setIsClicked(item)}
            className={`flex items-center justify-center w-20 h-10 rounded-lg 
            ${isClicked === item ? 'bg-violet-300  border-solid border border-violet-400' : ''}`}
            href={item === 'Home' ? '/' : item.toLocaleLowerCase()}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
