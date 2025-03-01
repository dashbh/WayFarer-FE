import type { FC } from 'react';
import { Box, Flex, HStack, IconButton, Button, useDisclosure, Stack } from '@chakra-ui/react';
import { Menu, X } from 'lucide-react';
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
});

export type RouteConfig = {
  path: string;
  label: string;
  component: () => Promise<{ default: React.ComponentType<any> }>;
};

type NavBarProps = {
  routes: RouteConfig[];
};

const NavBar: FC<NavBarProps> = ({ routes }) => {
  const { open: isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const renderLinks = () => {
    return routes.map(({ path, label }) => (
      <Button
        key={path}
        asChild
        color="white"
        variant={location.pathname === path ? 'outline' : 'ghost'}
      >
        <a href={path}>{label}</a>
      </Button>
    ));
  };

  return (
    <ChakraProvider value={system}>
      <Box as="nav" bg="blue.600" px={4} py={3} position="sticky" top={0} zIndex={1000}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            aria-label="Open Menu"
            display={{ base: 'flex', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </IconButton>

          <HStack gap={8} alignItems="center">
            <Box color="white" fontSize="xl" fontWeight="bold">
              WayFarer
            </Box>
            <HStack as="nav" gap={4} display={{ base: 'none', md: 'flex' }}>
              {renderLinks()}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" gap={4}>
              {renderLinks()}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </ChakraProvider>
  );
};

export default NavBar;
