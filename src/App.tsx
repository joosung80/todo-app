import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { Layout } from './components/Layout';
import { TodoForm } from './components/TodoForm';
import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import { TodoFilter as FilterType } from './types/todo';

const queryClient = new QueryClient();

function App() {
  const [filter, setFilter] = useState<FilterType['status']>('all');
  const { todos, isLoading, createTodo, toggleTodo, deleteTodo } = useTodos({ status: filter });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ColorModeScript initialColorMode="light" />
        <Layout>
          <TodoForm onSubmit={createTodo} />
          <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
          <TodoList
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
