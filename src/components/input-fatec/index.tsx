import {
  Container,
  SimpleGrid,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  StackDivider,
  Icon,
} from '@chakra-ui/react';

const Feature = ({ text }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}>
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Lista de Tarefas</Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="task">
              <FormLabel>Inserir nova tarefa</FormLabel>
            </FormControl>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
            <Input 
            placeholder="Digite a tarefa"
            _placeholder={{ color: 'gray.500' }}
            type="task" />
            <Checkbox>Realizada?</Checkbox>
            <Button
              rounded={7}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Inserir
            </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} bg={'gray.100'} mx={'auto'} maxW={'lg'} py={3} px={6} marginBottom={5} rounded={7}>
          <Feature
             text={'Tarefa 1'}
           />
           <Button
              rounded={7}
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Pendente
            </Button>
            <Button
              rounded={7}
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Excluir
            </Button>
            </Stack>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} bg={'gray.100'} mx={'auto'} maxW={'lg'} py={3} px={6} marginBottom={5} rounded={7}>
          <Feature
             text={'Tarefa 2'}
           />
           <Button
              rounded={7}
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Pendente
            </Button>
            <Button
              rounded={7}
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Excluir
            </Button>
            </Stack>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} bg={'gray.100'} mx={'auto'} maxW={'lg'} py={3} px={6} rounded={7}>
          <Feature
             text={'Tarefa 3'}
           />
           <Button
              rounded={7}
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Pendente
            </Button>
            <Button
              rounded={7}
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              Excluir
            </Button>
            </Stack>
        </Box>
        
      </Stack>
    </Flex>
  );
}