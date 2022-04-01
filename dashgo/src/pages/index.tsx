import { Flex, Button } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '@commons/components/elements/forms'

interface SignInProps {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('O campo e-mail é obrigatório').email(),
  password: yup.string().required('O campo senha é obrigatório'),
})

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const onSignIn: SubmitHandler<SignInProps> = (values) => {
    //submit sign in values to api
  }

  return (
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
        onSubmit={handleSubmit(onSignIn)}
      >
        <Flex flexDir="column" gap="4">
          <Input
            label="E-mail"
            id="email"
            type="email"
            name="email"
            placeholder="Seu e-mail"
            size="lg"
            error={formState.errors.email}
            {...register('email')}
          />

          <Input
            label="Senha"
            id="password"
            type="password"
            name="password"
            placeholder="Sua senha"
            focusBorderColor="blue.500"
            bg="gray.900"
            border="none"
            size="lg"
            error={formState.errors.password}
            {...register('password')}
          />
        </Flex>

        <Button
          type="submit"
          mt="6"
          colorScheme="blue"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
