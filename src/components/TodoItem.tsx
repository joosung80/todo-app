import { Box, Checkbox, IconButton, Text, HStack, useColorModeValue } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      p={4}
      bg={bg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="md"
      shadow="sm"
      mb={2}
    >
      <HStack spacing={4} justify="space-between">
        <Checkbox
          isChecked={todo.completed}
          onChange={() => onToggle(todo.id)}
          colorScheme="green"
        >
          <Text
            as={todo.completed ? 'del' : 'span'}
            color={todo.completed ? 'gray.500' : 'inherit'}
          >
            {todo.title}
          </Text>
        </Checkbox>
        <IconButton
          aria-label="Delete todo"
          icon={<DeleteIcon />}
          size="sm"
          colorScheme="red"
          variant="ghost"
          onClick={() => onDelete(todo.id)}
        />
      </HStack>
      {todo.description && (
        <Text fontSize="sm" color="gray.500" mt={2} ml={6}>
          {todo.description}
        </Text>
      )}
    </Box>
  );
};
