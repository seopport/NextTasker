import { Todo } from '@/types';
import Link from 'next/link';
import React from 'react';
import { ImStatsBars } from 'react-icons/im';

const reportPage = async () => {
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });

  const { todos } = await response.json();

  const completedTodos: Todo[] = todos.filter((item: Todo) => item.isDone === true);
  const InProgressTodos: Todo[] = todos.filter((item: Todo) => item.isDone === false);

  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center bg-purple-100 p-2 border border-solid border-purple-600 rounded-sm w-1/3 mt-6 text-center font-bold'>
        [할일 정보 통계 <ImStatsBars className='ml-1' />]
      </div>
      <div
        className='bg-rose-100 border-rose-400 mt-4 p-3 rounded-md border-solid border
        w-1/3 min-h-16 flex items-center justify-center'
      >
        <div>현재까지 총 {todos.length}개의 할일이 등록되었습니다.</div>
      </div>
      <div
        className='bg-amber-100 border-amber-400 mt-4 p-3 rounded-md border-solid border
        w-1/3 min-h-16 flex items-center justify-center'
      >
        <div>미완료 된 항목은 {InProgressTodos.length}개 입니다.</div>
      </div>
      <div
        className='bg-lime-100 border-lime-400 mt-4 p-3 rounded-md border-solid border
        w-1/3 min-h-16 flex items-center justify-center'
      >
        <div>완료 된 항목은 {completedTodos.length}개 입니다.</div>
      </div>
      <Link href='/todo-csr' className='mt-5 decoration-solid underline'>
        할일 추가하러 가기 (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ
      </Link>
    </div>
  );
};

export default reportPage;
