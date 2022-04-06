import React from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'

import { Header } from '@commons/components/modules/Header'
import { Sidebar } from '@commons/components/modules/Sidebar'
import { Input } from '@commons/components/elements/forms'
import { CreateUserFormProps } from '@views/Users/types'
import { handleCreateNewUser } from '@views/Users/entities/createNewUser'
import { queryClient } from '@services/queryClient'

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório'),
  email: yup.string().required('O campo e-mail é obrigatório').email(),
  password: yup.string().required('O campo senha é obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

const CreateUser: React.FC = () => {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const createNewUser = useMutation(handleCreateNewUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    },
  })

  const onCreateUserSubmit: SubmitHandler<CreateUserFormProps> = async (
    values
  ) => {
    // send new user values to api
    await createNewUser.mutateAsync({
      name: values.name,
      email: values.email,
      password: values.password,
    })

    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          padding="8"
          onSubmit={handleSubmit(onCreateUserSubmit)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                id="name"
                name="nome"
                label="Nome completo"
                {...register('name')}
                error={formState.errors.name}
              />

              <Input
                id="email"
                name="email"
                label="Seu e-mail"
                {...register('email')}
                error={formState.errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                id="password"
                name="password"
                label="Senha"
                type="password"
                {...register('password')}
                error={formState.errors.password}
              />

              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirme sua senha"
                {...register('confirmPassword')}
                error={formState.errors.confirmPassword}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" gap="4">
            <Button colorScheme="whiteAlpha" type="button">
              Cancelar
            </Button>
            <Button
              colorScheme="pink"
              type="submit"
              isLoading={formState.isSubmitting}
            >
              Salvar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser
