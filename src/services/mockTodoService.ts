import { Todo, CreateTodoInput, UpdateTodoInput, TodoFilter } from '../types/todo';

// 초기 목업 데이터
const mockTodos: Todo[] = [
  {
    id: '1',
    title: '리액트 학습하기',
    description: 'React와 TypeScript를 사용하여 TODO 앱 만들기',
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'AWS 서버리스 학습하기',
    description: 'CDK를 사용하여 서버리스 백엔드 구축하기',
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// 지연 시간을 시뮬레이션하는 유틸리티 함수
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const todoService = {
  // 모든 TODO 항목 조회
  async getTodos(filter?: TodoFilter): Promise<Todo[]> {
    await delay(500); // API 호출 시뮬레이션

    let filteredTodos = [...mockTodos];
    if (filter?.status === 'completed') {
      filteredTodos = filteredTodos.filter(todo => todo.completed);
    } else if (filter?.status === 'active') {
      filteredTodos = filteredTodos.filter(todo => !todo.completed);
    }

    return filteredTodos;
  },

  // 단일 TODO 항목 조회
  async getTodoById(id: string): Promise<Todo | undefined> {
    await delay(300);
    return mockTodos.find(todo => todo.id === id);
  },

  // TODO 항목 생성
  async createTodo(input: CreateTodoInput): Promise<Todo> {
    await delay(500);
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: input.title,
      description: input.description,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockTodos.push(newTodo);
    return newTodo;
  },

  // TODO 항목 수정
  async updateTodo(input: UpdateTodoInput): Promise<Todo> {
    await delay(500);
    const todoIndex = mockTodos.findIndex(todo => todo.id === input.id);
    if (todoIndex === -1) {
      throw new Error('TODO not found');
    }

    const updatedTodo = {
      ...mockTodos[todoIndex],
      ...input,
      updatedAt: new Date().toISOString(),
    };
    mockTodos[todoIndex] = updatedTodo;
    return updatedTodo;
  },

  // TODO 항목 삭제
  async deleteTodo(id: string): Promise<void> {
    await delay(500);
    const todoIndex = mockTodos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('TODO not found');
    }
    mockTodos.splice(todoIndex, 1);
  },

  // TODO 완료 상태 토글
  async toggleTodo(id: string): Promise<Todo> {
    await delay(300);
    const todoIndex = mockTodos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('TODO not found');
    }

    const updatedTodo = {
      ...mockTodos[todoIndex],
      completed: !mockTodos[todoIndex].completed,
      updatedAt: new Date().toISOString(),
    };
    mockTodos[todoIndex] = updatedTodo;
    return updatedTodo;
  },
};
