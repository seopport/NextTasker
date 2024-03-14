import { ImStatsBars } from 'react-icons/im';
import React from 'react';
import TodoTaskSSR from '@/components/TodoTaskSSR';
import Link from 'next/link';
import { Todo } from '@/types';

const TodoSSRPage = async () => {
  const response = await fetch('http://localhost:4000/todos', {
    method: 'GET',
    cache: 'no-store',
  });
  const todos: Todo[] = await response.json();

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
