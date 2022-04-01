import React from 'react'
import { RiAddLine } from 'react-icons/ri'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import { Header } from '@commons/components/modules/Header'
import { Sidebar } from '@commons/components/modules/Sidebar'
import { Pagination } from '@commons/components/modules/Pagination'

const UserList = () => {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="blue"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Th px="6">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Mateus Oliveira</Text>
                    <Text fontSize="sm" color="gray.300">
                      mateus.oliveira
                    </Text>
                  </Box>
                </Td>
                <Td>04 de abril, 2021</Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
