import { Todo } from '@/types';
import React, { useEffect, useState } from 'react';

type PropsType = {
  todos: Todo[];
  setTargetTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>;
  setIsModifying: React.Dispatch<React.SetStateAction<boolean>>;
  isDone: boolean;
};

const TodoTask = ({ todos, setTargetTodo, setIsModifying, isDone }: PropsType) => {
  const handleStatusToggle = async (id: Todo['id']) => {
    const targetTodo = todos?.find((item) => item.id === id);
    setTargetTodo(targetTodo);
    console.log(targetTodo);

    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ isDone: !targetTodo?.isDone }),
      });
    } catch (error) {}
  };

  const handleDelete = async (id: Todo['id']) => {
    console.log(id);
    if (window.confirm('삭제할거니?')) {
      try {
        const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to modify the todo item');
        }

        // 백엔드에서 보내준 응답을 받아서 alert
        const result = await response.json();
        alert(result.message);
      } catch (error) {
        console.error(error);
      }
    } else return;
  };

  const handleModify = (id: Todo['id']) => {
    setIsModifying(true);
    const targetTodo = todos?.find((item) => item.id === id);
    setTargetTodo(targetTodo);
  };

  return (
    <div>
      <div className='font-bold text-lg mb-3'>{isDone ? '완료된 항목' : '미완료 항목'}</div>
      {todos
        ?.filter((item: Todo) => item.isDone === isDone)
        .map((item: Todo) => {
          console.log(item.isDone, isDone);
          return (
            <div key={item.id} className='bg-indigo-100 border border-solid border-blue-400 w-60'>
              <div>타이틀 : {item.title}</div>
              <div>내용 : {item.contents}</div>
              <div>아이디 : {item.id}</div>
              <div>상태 : {item.isDone ? '완료됨' : '미완료'}</div>
              <button
                className='min-w-16 h-8 bg-purple-300 rounded-sm border-solid border-purple-500 border'
                onClick={() => {
                  handleStatusToggle(item.id);
                }}
              >
                {!item.isDone ? '완료' : '되돌리기'}
              </button>
              <button
                className='w-16 h-8 bg-amber-300 rounded-sm border-solid border-amber-500 border'
                onClick={() => {
                  handleModify(item.id);
                }}
              >
                수정
              </button>
              <button
                className='w-16 h-8 bg-rose-300 rounded-sm border-solid border-rose-500 border'
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

export default TodoTask;
