import { Box, Text, Image, VStack, Heading } from '@chakra-ui/react';

const Index = () => {
  return (
    <VStack minH="100vh" align="center" justify="center" bg="gray.100">
      <Box maxW="xl" p={5} bg="white" boxShadow="xl" rounded="md">
        <Image src="/images/ronald-reagan.jpg" alt="Ronald Reagan" borderRadius="full" boxSize="300px" objectFit="cover" />
        <Heading as="h1" size="xl" mt={6} mb={2}>Ronald Reagan</Heading>
        <Text fontSize="lg">Welcome to the official website of Ronald Reagan, the 40th President of the United States. Explore his legacy and contributions to the world.</Text>
      </Box>
    </VStack>
  );
};

export default Index;