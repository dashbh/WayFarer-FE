import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Suspense, lazy, useEffect, useState } from "react";
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';

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

const FeatureSection = lazy(() => import("../components/FeatureSection"));

interface Post {
  id: number;
  title: string;
  body: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<number>(10); // Initially show 10 posts

  useEffect(() => {
    // Fetch 10 posts initially
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const loadMorePosts = () => {
    const newLimit = visiblePosts + 5; // Increase by 5

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${newLimit}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));

    setVisiblePosts(newLimit);
  };

  return (
    <ChakraProvider value={system}>
    <VStack gap={6} p={8} w="full">
      <Heading>WayFarer - Client-Side Rendering (CSR)</Heading>

      {posts.map((post) => (
        <Box key={post.id} p={4} borderWidth="1px" borderRadius="lg" w="full">
          <Heading size="md">{post.title}</Heading>
          <Text mt={2}>{post.body}</Text>
        </Box>
      ))}

      <Button colorScheme="teal" onClick={loadMorePosts}>
        Explore More
      </Button>

      <Suspense fallback={<Text>Loading Features...</Text>}>
        <FeatureSection />
      </Suspense>
    </VStack>
    </ChakraProvider>
  );
};

export default HomePage;
