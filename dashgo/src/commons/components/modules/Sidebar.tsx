import React from 'react'
import Link from 'next/link'
import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'

export const Sidebar: React.FC = () => {
  return (
    <Box as="aside" width="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Geral
          </Text>

          <Stack spacing="4" mt="8" align="stretch">
            <Link href="/dashboard">
              <Flex display="flex" alignItems="center">
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Dashboard
                </Text>
              </Flex>
            </Link>
            <Link href="/users">
              <Flex display="flex" alignItems="center">
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Usuários
                </Text>
              </Flex>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Mais
          </Text>

          <Stack spacing="4" mt="8" align="stretch">
            <Link href="/users/create">
              <Flex display="flex" alignItems="center">
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Criar novo usuário
                </Text>
              </Flex>
            </Link>
            <Flex display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
