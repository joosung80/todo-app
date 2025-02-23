import { Box, Container, Flex, Heading, useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box minH="100vh" bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}>
      <Container maxW="container.md" py={8}>
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="lg">엘랑비탈의 TODO 앱</Heading>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
        {children}
      </Container>
    </Box>
  );
};
