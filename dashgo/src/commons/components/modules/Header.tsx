import React from 'react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Input as ChakraInput,
  Stack,
  Text,
} from '@chakra-ui/react'

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      width="100%"
      height="20"
      marginX="auto"
      align="center"
      px="6"
      maxW="1480px"
    >
      <Text fontSize="2xl" fontWeight="bold" letterSpacing="tight" width="64">
        dashgo{' '}
        <Text as="span" color="blue.500" ml="0.5">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="3"
        px="8"
        ml="6"
        maxW="396px"
        alignSelf="center"
        alignItems="center"
        position="relative"
        bg="gray.800"
        borderRadius="md"
      >
        <ChakraInput
          color="gray.50"
          variant="unstyled"
          mr="4"
          placeholder="O que você procura?"
        />

        <Icon as={RiSearchLine} fontSize={18} />
      </Flex>

      <Flex align="center" ml="auto">
        <Stack
          direction="row"
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderColor="blue.700"
          borderRightWidth="1px"
        >
          <Icon as={RiNotificationLine} fontSize={18} />
          <Icon as={RiUserAddLine} fontSize={18} />
        </Stack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Mateus Oliveira</Text>
            <Text color="gray.300" fontSize="small">
              mateus.oli
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Mateus Oliveira"
            bg="blue.800"
            color="gray.100"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
