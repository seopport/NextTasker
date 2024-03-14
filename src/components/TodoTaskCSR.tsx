import { useModifyTodoMutation } from '@/hooks/mutateTodos';
import { Todo, todosPropsType } from '@/types';
import React from 'react';
import { ImStatsBars } from 'react-icons/im';

const TodoTaskCSR = ({ todos, setTargetTodo, setIsModifying, isDone }: todosPropsType) => {
  const modifyMutation = useModifyTodoMutation();

  const handleStatusToggle = async (id: Todo['id']) => {
    const targetTodo = todos?.find((item) => item.id === id);
    setTargetTodo(targetTodo);

    try {
      // await fetch(`http://localhost:3000/api/todos/${id}`, {
      //   method: 'PATCH',
      //   body: JSON.stringify({ isDone: !targetTodo?.isDone }),
      // });
      modifyMutation.mutate({ modifyContent: undefined, targetTodo, isDone: !targetTodo?.isDone });
    } catch (error) {}
  };

  const handleDelete = async (id: Todo['id']) => {
    if (window.confirm('삭제하시겠습니까?')) {
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
    <div
      className={`flex flex-col items-center border border-solid ${
        isDone ? 'border-lime-500' : 'border-pink-500'
      } rounded-lg p-3 min-w-64`}
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
              {/* <div>아이디 : {item.id}</div> */}
              <div className='flex gap-1 justify-center mt-4 text-sm '>
                <button
                  className='w-14 h-8 bg-amber-300 rounded-sm border-solid border-amber-600 border'
                  onClick={() => {
                    handleModify(item.id);
                  }}
                >
                  수정
                </button>
                <button
                  className='w-14 h-8 bg-rose-300 rounded-sm border-solid border-rose-500 border'
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  삭제
                </button>
                <button
                  className=' min-w-14 h-8 bg-purple-300 rounded-sm border-solid border-purple-500 border'
                  onClick={() => {
                    handleStatusToggle(item.id);
                  }}
                >
                  {!item.isDone ? '완료' : '되돌리기'}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoTaskCSR;
