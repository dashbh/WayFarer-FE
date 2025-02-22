import type { FC } from "react";
import { Box, Flex, HStack, IconButton, Button, useDisclosure, Stack } from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                heading: { value: `'Figtree', sans-serif` },
                body: { value: `'Figtree', sans-serif` },
            },
        },
    },
})

const Navbar: FC = () => {
    const { open: isOpen, onOpen, onClose } = useDisclosure();
    return (
        <ChakraProvider value={system}>
            <Box as="nav" bg="blue.600" px={4} py={3} position="sticky" top={0} zIndex={1000}>
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <IconButton
                        size="md"
                        aria-label="Open Menu"
                        display={{ base: "flex", md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </IconButton>

                    <HStack gap={8} alignItems="center">
                        <Box color="white" fontSize="xl" fontWeight="bold">WayFarer</Box>
                        <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>
                            <Button asChild variant="ghost" color="white">
                                <a href="#">Home</a>
                            </Button>
                            <Button asChild variant="ghost" color="white">
                                <a href="/explore">Explore</a>
                            </Button>
                            <Button asChild variant="ghost" color="white">
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </HStack>
                    </HStack>


                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as="nav" gap={4}>
                            <Button asChild variant="ghost" color="white">
                                <a href="#">Home</a>
                            </Button>
                            <Button asChild variant="ghost" color="white">
                                <a href="/explore">Explore</a>
                            </Button>
                            <Button asChild variant="ghost" color="white">
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </ChakraProvider>
    );
};

export default Navbar;
