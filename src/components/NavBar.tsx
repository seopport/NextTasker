'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const navList = ['Home', 'About', 'Report', 'Todo-CSR', 'Todo-SSR'];

  // /home,/about ...
  const pathName = usePathname();

  return (
    <nav>
      <div className='flex bg-indigo-50 h-16 items-center justify-end'>
        <div className='mr-auto ml-10 text-2xl font-medium'>Meow Inc.</div>
        {navList.map((item, idx) => {
          return (
            <Link
              key={idx}
              className={` flex items-center justify-center w-20 h-10 rounded-lg mr-10 border-solid
              ${`/${item.toLocaleLowerCase()}` === pathName ? 'bg-purple-300  border border-purple-500' : ''}`}
              href={item.toLocaleLowerCase()}
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
