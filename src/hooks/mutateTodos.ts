// hooks/useModifyTodoMutation.ts

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo, deleteTodo, modifyTodo } from './fetchTodos';
import { QueryKeys } from '@/constants/queryKeys';

export const useModifyTodoMutation = () => {
  const queryClient = useQueryClient();

  const modifyMutation = useMutation({
    mutationFn: modifyTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TODOS],
      });
    },
  });

  return modifyMutation;
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TODOS],
      });
    },
  });

  return deleteMutation;
};

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TODOS],
      });
    },
  });

  return addMutation;
};
