'use client';

import { Todo } from '@/types';
import React, { useEffect, useState } from 'react';

const TodoCSRPage = () => {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:3000/api/todos', {
        method: 'GET',
      });
      const { todos } = await response.json();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  if (!todos) return <div>로딩중 ..</div>;

  const handleDelete = async (id: Todo['id']) => {
    if (window.confirm('삭제할거니?')) {
      try {
        await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: 'DELETE',
        });

        alert('삭제되었단다');
      } catch (error) {
        console.error(error);
      }
    } else return;
  };

  return (
    <div>
      제목 : <input /> 내용: <input />
      <button>제출</button>
      {todos?.map((item: Todo) => {
        return (
          <div key={item.id} className='bg-indigo-100 border border-solid border-blue-400 m-5 w-60'>
            <div>타이틀 : {item.title}</div>
            <div>내용 : {item.contents}</div>
            <div>아이디 : {item.id}</div>
            <div>상태 : {item.isDone ? '완료됨' : '미완료'}</div>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoCSRPage;
