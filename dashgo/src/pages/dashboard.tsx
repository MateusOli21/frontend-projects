import React from 'react'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import { Header } from '@commons/components/modules/Header'
import { Sidebar } from '@commons/components/modules/Sidebar'

const Dashboard = () => {
  return (
    <Flex flexDir="column" minH="100vh">
      <Header />

      <Flex width="100%" my="6" maxW="1480px" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
          minH="40vh"
        >
          <Box height="100%" padding="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
          </Box>
          <Box height="100%" padding="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Dashboard
