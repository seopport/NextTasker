'use client';

import { Todo } from '@/types';
import React, { ChangeEvent, useEffect, useState } from 'react';

const TodoCSRPage = () => {
  const [todos, setTodos] = useState<Todo[]>();
  const [isModifying, setIsModifying] = useState(false);
  const [targetTodo, setTargetTodo] = useState<Todo>();
  const [content, setContent] = useState<Todo['contents']>('');

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

  const handleModify = (id: Todo['id']) => {
    setIsModifying(true);
    const targetTodo = todos.find((item) => item.id === id);
    setTargetTodo(targetTodo);
  };

  const handleModifyComplete = async () => {
    if (!content.trim()) {
      alert('수정 사항이 없습니다.');
      return;
    }
    console.log(content);
    console.log(targetTodo?.id);

    // patch 서버 통신
    try {
      const response = await fetch(`http://localhost:3000/api/todos/${targetTodo?.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ contents: content }),
      });

      if (!response.ok) {
        throw new Error('Failed to modify the todo item');
      }

      // 백엔드에서 보내준 응답을 받아서 alert
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.log(error);
    }

    setIsModifying(false);
  };
  const handleModifyCancel = () => {
    if (content.trim()) {
      if (window.confirm('수정을 취소하시겠습니까?')) {
        setIsModifying(false);
      } else {
        return;
      }
    }
    setIsModifying(false);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className='relative'>
      {/* 모달 wrap */}
      <div
        className={`${
          isModifying ? 'z-10 opacity-100' : '-z-10 opacity-0'
        } fixed  bg-slate-900 bg-opacity-40 w-full h-full`}
      >
        {/* 모달 container */}
        <div className='flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-amber-50 w-96 h-72 rounded-xl p-3 shadow-lg'>
          <button className='self-end text-lg' onClick={() => setIsModifying(false)}>
            ✕
          </button>
          <div className='flex flex-col gap-3 items-center'>
            <div className='flex flex-col items-center gap-2 '>
              <strong className='font-bold'>제목</strong> {targetTodo?.title}
            </div>
            <hr className='w-2/3 bg-gray-900'></hr>
            <div className='flex flex-col items-center gap-2'>
              <strong className='font-bold'>내용</strong> {targetTodo?.contents}
            </div>
            <hr className='w-2/3 bg-gray-900'></hr>

            <div className='flex flex-col items-center gap-2'>
              <strong className='font-bold'>수정할 내용</strong>
              <input
                value={content}
                onChange={handleContentChange}
                className='border border-solid border-gray-900 rounded-sm text-sm'
              />
            </div>
          </div>
          <div className='flex gap-2 self-end mt-auto'>
            <button
              className='w-16 h-8 bg-amber-300 rounded-sm border-solid border-amber-500 border'
              onClick={handleModifyComplete}
            >
              완료
            </button>
            <button
              className='w-16 h-8 bg-rose-300 rounded-sm border-solid border-rose-500 border'
              onClick={handleModifyCancel}
            >
              취소
            </button>
          </div>
        </div>
      </div>
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
            <button
              onClick={() => {
                handleModify(item.id);
              }}
            >
              수정
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoCSRPage;
