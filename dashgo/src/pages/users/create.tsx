import React from 'react'
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

const CreateUser: React.FC = () => {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="nome" label="Nome completo" />

              <Input name="email" label="Seu e-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input name="password" label="Senha" />

              <Input name="confirmPassword" label="Confirme sua senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" gap="4">
            <Button colorScheme="whiteAlpha">Cancelar</Button>
            <Button colorScheme="pink">Salvar</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser
