// hooks/useModifyTodoMutation.ts

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { modifyTodo } from './fetchTodos';
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
