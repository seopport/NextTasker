export type CompanyInfo = {
  name: string;
  description: string;
  image: string;
};

export type Todo = {
  id: string;
  contents: string;
  title: string;
  isDone: boolean;
};

export type todosPropsType = {
  todos: Todo[] | undefined;
  setTargetTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>;
  setIsModifying: React.Dispatch<React.SetStateAction<boolean>>;
  isDone: boolean;
};
