import { Todo } from '@/types';
import React from 'react';

const todoSSRPage = async () => {
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
    cache: 'no-cache',
  });
  const { todos } = await response.json();

  return (
    <div>
      {todos.map((item: Todo) => {
        return (
          <div key={item.id} className='bg-indigo-100 border border-solid border-blue-400 m-5 w-60'>
            <div>타이틀 : {item.title}</div>
            <div>내용 : {item.contents}</div>
            <div>아이디 : {item.id}</div>
            <div>상태 : {item.isDone ? '완료됨' : '미완료'}</div>
            {/* <button>삭제</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default todoSSRPage;
