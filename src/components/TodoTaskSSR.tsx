import { Todo } from '@/types';
import React from 'react';

const TodoTaskSSR = ({ todos, isDone }: { todos: Todo[]; isDone: boolean }) => {
  return (
    <div
      className={`flex flex-col items-center border border-solid ${
        isDone ? 'border-lime-500' : 'border-pink-500'
      } rounded-lg p-3`}
    >
      <div className='font-bold text-xl'>{isDone ? '완료된 항목' : '미완료 항목'}</div>
      {todos
        ?.filter((item: Todo) => item.isDone === isDone)
        .map((item: Todo) => {
          return (
            <div
              key={item.id}
              className={`${
                isDone ? 'bg-lime-200 border-lime-400' : 'bg-pink-200 border-pink-400'
              } mt-4 p-3 rounded-md border-solid border
               w-60 min-h-28`}
            >
              <div className='mb-2'>제목 : {item.title}</div>
              <div className='mb-2'>내용 : {item.contents}</div>
              <div className='flex gap-1 justify-center mt-4 text-sm '></div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoTaskSSR;
