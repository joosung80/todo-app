import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoService } from '../services/mockTodoService';
import { CreateTodoInput, UpdateTodoInput, TodoFilter } from '../types/todo';

export const useTodos = (filter?: TodoFilter) => {
  const queryClient = useQueryClient();

  const { data: todos = [], isLoading } = useQuery(
    ['todos', filter],
    () => todoService.getTodos(filter),
    {
      keepPreviousData: true,
    }
  );

  const createTodo = useMutation(
    (newTodo: CreateTodoInput) => todoService.createTodo(newTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const updateTodo = useMutation(
    (todo: UpdateTodoInput) => todoService.updateTodo(todo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const deleteTodo = useMutation(
    (id: string) => todoService.deleteTodo(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const toggleTodo = useMutation(
    (id: string) => todoService.toggleTodo(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  return {
    todos,
    isLoading,
    createTodo: createTodo.mutate,
    updateTodo: updateTodo.mutate,
    deleteTodo: deleteTodo.mutate,
    toggleTodo: toggleTodo.mutate,
  };
};
