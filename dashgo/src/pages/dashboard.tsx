import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Header } from '@commons/components/modules/Header'

const Dashboard = () => {
  return (
    <Flex flexDir="column">
      <Header />
      Dashboard
    </Flex>
  )
}

export default Dashboard
