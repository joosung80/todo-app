import { useState } from 'react';
import {
  Button,
  FormControl,
  Input,
  VStack,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { CreateTodoInput } from '../types/todo';

interface TodoFormProps {
  onSubmit: (todo: CreateTodoInput) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const bg = useColorModeValue('white', 'gray.700');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim() || undefined,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack
        spacing={4}
        p={4}
        bg={bg}
        borderRadius="md"
        shadow="sm"
        mb={8}
      >
        <FormControl>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="할 일을 입력하세요"
            size="lg"
          />
        </FormControl>
        <FormControl>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="상세 설명 (선택사항)"
            size="sm"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          width="full"
          isDisabled={!title.trim()}
        >
          추가
        </Button>
      </VStack>
    </form>
  );
};
