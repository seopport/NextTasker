import { Todo } from '@/types';
import { ImStatsBars } from 'react-icons/im';
import React from 'react';
import TodoTaskSSR from '@/components/TodoTaskSSR';
import Link from 'next/link';

const TodoSSRPage = async () => {
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
    cache: 'no-cache',
  });
  const { todos } = await response.json();

  //탠스택쿼리?

  return (
    <div className='relative flex flex-col items-center'>
      {/* 할일 입력 칸 */}
      <div className='rounded-sm bg-amber-100 p-2 border border-solid border-gray-600 w-1/3 mt-6 text-center font-bold'>
        TodoList
      </div>
      <Link href='/report' className='flex mt-3'>
        [할일 정보 통계 보러가기 <ImStatsBars className='ml-1' />]
      </Link>
      {/* Task 컴포넌트 */}
      <div className='flex gap-28 mt-8'>
        <TodoTaskSSR todos={todos} isDone={false} />
        <TodoTaskSSR todos={todos} isDone={true} />
      </div>
    </div>
  );
};

export default TodoSSRPage;
