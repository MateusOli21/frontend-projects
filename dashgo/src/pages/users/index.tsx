import React, { useState } from 'react'
import { RiAddLine } from 'react-icons/ri'
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
} from '@chakra-ui/react'

import { Header } from '@commons/components/modules/Header'
import { Sidebar } from '@commons/components/modules/Sidebar'
import { Pagination } from '@commons/components/modules/Pagination'
import { UsersTable } from '@views/Users/components/UsersTable'
import { useUsers } from '@views/Users/hooks'

const UserList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data, isLoading, error, isSuccess, isFetching } =
    useUsers(currentPage)

  const onPageChange = (selectedPage: number) => setCurrentPage(selectedPage)

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading
              size="lg"
              fontWeight="normal"
              display="flex"
              alignItems="center"
              gap="4"
            >
              Usuários
              {isFetching && !isLoading && <Spinner size="sm" />}
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

          {isLoading && (
            <Flex justify="center">
              <Spinner />
            </Flex>
          )}

          {!isLoading && error && (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          )}

          {isSuccess && (
            <>
              <UsersTable users={data.users} />
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
