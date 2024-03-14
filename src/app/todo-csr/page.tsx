'use client';

import TodoTask from '@/components/TodoTaskCSR';
import { Todo } from '@/types';
import { ImStatsBars } from 'react-icons/im';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/constants/queryKeys';
import { fetchTodos, modifyTodo } from '@/hooks/fetchTodos';
import { useAddTodoMutation, useModifyTodoMutation } from '@/hooks/mutateTodos';

const TodoCSRPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const addMutation = useAddTodoMutation();
  const modifyMutation = useModifyTodoMutation();

  // const [todos, setTodos] = useState<Todo[]>();
  const [isModifying, setIsModifying] = useState(false);
  const [targetTodo, setTargetTodo] = useState<Todo>();
  const [modifyContent, setModifyContent] = useState<Todo['contents']>('');
  const [content, setContent] = useState<Todo['contents']>('');
  const [title, setTitle] = useState<Todo['title']>('');

  // useEffect(() => {
  //   // const fetchTodos = async () => {
  //   //   const response = await fetch('http://localhost:3000/api/todos', {
  //   //     method: 'GET',
  //   //   });
  //   //   const { todos }: { todos: Todo[] } = await response.json();
  //   //   // setTodos(todos);
  //   // };
  //   // fetchTodos();
  // }, []);

  // 조회

  // tantack query todos 배열 불러오기
  const {
    isLoading,
    isError,
    data: todos,
  } = useQuery({
    queryKey: [QueryKeys.TODOS],
    queryFn: fetchTodos,
  });

  // const modifyMutation = useMutation({
  //   mutationFn: modifyTodo,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: [QueryKeys.TODOS] });
  //   },
  // });

  if (isLoading) return <div>로딩중 ..</div>;
  //로딩스피너 추가

  if (isError) return <div>일시적인 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.</div>;

  // todo 내용 수정
  const handleModifyComplete = async () => {
    if (!modifyContent.trim()) {
      alert('수정 사항이 없습니다.');
      return;
    }

    // patch 서버 통신
    try {
      // const response = await fetch(`http://localhost:3000/api/todos/${targetTodo?.id}`, {
      //   method: 'PATCH',
      //   body: JSON.stringify({ contents: modifyContent }),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to modify the todo item');
      // }

      // // 백엔드에서 보내준 응답을 받아서 alert
      // const result = await response.json();
      // alert(result.message);

      modifyMutation.mutate({ modifyContent, targetTodo, isDone: targetTodo?.isDone });
      setModifyContent('');
    } catch (error) {
      console.log(error);
    }

    setIsModifying(false);
  };
  const handleModifyCancel = () => {
    if (modifyContent.trim()) {
      if (window.confirm('수정을 취소하시겠습니까?')) {
        setIsModifying(false);
      } else {
        return;
      }
    }
    setIsModifying(false);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModifyContent(e.target.value);
  };

  const handleSubmitButton = async () => {
    if (!title.trim()) {
      alert('제목을 입력하세요');
      return;
    }

    if (!content.trim()) {
      alert('내용을 입력하세요.');
      return;
    }

    try {
      // const response = await fetch('http://localhost:3000/api/todos', {
      //   method: 'POST',
      //   body: JSON.stringify({ title, contents: content }),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to add todo item ');
      // }

      // const result = await response.json();
      // alert(result.message);
      addMutation.mutate({ title, contents: content });
      setTitle('');
      setContent('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='relative flex flex-col items-center'>
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
                value={modifyContent}
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
      {/* 할일 입력 칸 */}
      <div className='bg-amber-100 p-2 rounded-sm border border-solid border-gray-500 w-fit mt-6'>
        제목 :{' '}
        <input
          className='border border-solid border-gray-600 mr-5'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        내용:{' '}
        <input
          className='border border-solid border-gray-600 mr-5'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handleSubmitButton}
          className='w-16 h-8 bg-amber-300 rounded-sm border-solid border-amber-500 border'
        >
          제출
        </button>
      </div>

      {/* 통계 routing */}
      <button onClick={() => router.push('/report')} className='flex mt-3'>
        [할일 정보 통계 보러가기 <ImStatsBars className='ml-1' />]
      </button>
      {/* Task 컴포넌트 */}
      <div className='flex gap-28 mt-8'>
        <TodoTask todos={todos} setTargetTodo={setTargetTodo} setIsModifying={setIsModifying} isDone={false} />
        <TodoTask todos={todos} setTargetTodo={setTargetTodo} setIsModifying={setIsModifying} isDone={true} />
      </div>
    </div>
  );
};

export default TodoCSRPage;
