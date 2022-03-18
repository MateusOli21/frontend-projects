import { Flex, Button } from '@chakra-ui/react'
import { Input } from '@commons/components/elements/forms'

const SignIn = () => (
  <Flex width="100vw" minH="100vh" align="center" justify="center">
    <Flex
      as="form"
      width="100%"
      maxW="496px"
      bg="gray.800"
      paddingX="4"
      paddingY="8"
      borderRadius="8"
      flexDir="column"
    >
      <Flex flexDir="column" gap="4">
        <Input
          label="E-mail"
          type="email"
          name="email"
          placeholder="Seu e-mail"
          size="lg"
        />

        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Sua senha"
          focusBorderColor="blue.500"
          bg="gray.900"
          border="none"
          size="lg"
        />
      </Flex>

      <Button type="submit" mt="6" colorScheme="blue">
        Entrar
      </Button>
    </Flex>
  </Flex>
)

export default SignIn
