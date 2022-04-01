import React from 'react'
import { Box, Button, Stack } from '@chakra-ui/react'

export const Pagination: React.FC = () => {
  return (
    <Stack direction="row" mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        <Button
          fontSize="xs"
          colorScheme="blue"
          size="sm"
          width="4"
          disabled
          _disabled={{
            bgColor: 'blue.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button
          width="4"
          fontSize="xs"
          size="sm"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.500',
          }}
        >
          2
        </Button>
        <Button
          width="4"
          fontSize="xs"
          size="sm"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.500',
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  )
}
