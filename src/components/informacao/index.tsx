import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image, // Alterado de Img para Image
} from '@chakra-ui/react';

export default function BlogPostWithoutImage() {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://gifdb.com/images/high/going-crazy-mad-lilo-and-stitch-meme-bgsgwe3mrslcagj0.gif'
            }
            alt={'Blog post image'}
            objectFit={'cover'}
            w={'100%'}
            h={'100%'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Sobre mim
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Quem sou eu? ¯\_(ツ)_/¯
          </Heading>
          <Text color={'gray.500'}>
            Estudante de ADS na Fatec Indaiatuba.
            Atualmente estou pirando na batatinha graças ao meu projeto de iniciação científica 😭
            Mandem socorro.
            PS. Pega leve nas atividades professor...
          </Text>
          <Text color={'gray.500'}>
            PS.: Caro professor, tenha misericordia 🍕
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://cdn.awsli.com.br/600x1000/1594/1594408/produto/148206698b1952a3f7d.jpg'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Sabrina Onishi</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
