import React from 'react'
import {
  Box,
  Checkbox,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import { UserProps } from '@views/Users/types'

interface UsersTableProps {
  users: UserProps[]
}

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
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
        {users?.map((user) => (
          <Tr key={user.id}>
            <Th px="6">
              <Checkbox colorScheme="blue" />
            </Th>
            <Td>
              <Box>
                <Text fontWeight="bold">{user.name}</Text>
                <Text fontSize="sm" color="gray.300">
                  {user.email}
                </Text>
              </Box>
            </Td>
            <Td>{user.createdAt}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
