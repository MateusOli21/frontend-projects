import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

interface PaginationButtonProps extends ButtonProps {
  number: number
  isCurrent?: boolean
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  isCurrent,
  number,
  ...rest
}) => {
  return (
    <Button
      fontSize="xs"
      colorScheme={isCurrent ? 'blue' : 'gray'}
      bgColor={!isCurrent && 'gray.700'}
      size="sm"
      width="4"
      disabled={isCurrent}
      _disabled={{
        bgColor: 'blue.500',
        cursor: 'default',
      }}
      _hover={{
        bgColor: !isCurrent && 'gray.500',
      }}
      {...rest}
    >
      {number}
    </Button>
  )
}
