import { ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import { TodoFilter as FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType['status'];
  onFilterChange: (status: FilterType['status']) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const bg = useColorModeValue('white', 'gray.700');

  return (
    <ButtonGroup
      spacing={2}
      p={4}
      bg={bg}
      borderRadius="md"
      shadow="sm"
      mb={4}
      width="full"
      display="flex"
      justifyContent="center"
    >
      <Button
        size="sm"
        colorScheme={currentFilter === 'all' ? 'blue' : 'gray'}
        onClick={() => onFilterChange('all')}
      >
        전체
      </Button>
      <Button
        size="sm"
        colorScheme={currentFilter === 'active' ? 'blue' : 'gray'}
        onClick={() => onFilterChange('active')}
      >
        진행중
      </Button>
      <Button
        size="sm"
        colorScheme={currentFilter === 'completed' ? 'blue' : 'gray'}
        onClick={() => onFilterChange('completed')}
      >
        완료
      </Button>
    </ButtonGroup>
  );
};
