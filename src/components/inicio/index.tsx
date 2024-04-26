import {

  Container,
  Heading,
  Stack,
  Text,
  Button,

} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Gerencie suas{' '}
          <Text as={'span'} color={'blue.400'}>
            Tasks
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Gerencie facilmente suas tarefas com o clique de um botão.
          Sem complicações, sem dor de cabeça.
          Pra que ser difícil, se podemos facilitar?
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}>
            <a href="/tarefas">Comece aqui</a>
          </Button>
          <Button rounded={'full'} px={6}>
          <a href="/sobre">Sobre nós</a>
          </Button>
        </Stack>
        
      </Stack>
    </Container>
  );
}

