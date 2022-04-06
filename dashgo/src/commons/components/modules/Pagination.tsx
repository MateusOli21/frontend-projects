import React from 'react'
import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { PaginationButton } from '../elements/buttons'

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0)
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Stack direction="row" mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationButton onClick={() => onPageChange(1)} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text display="flex" alignItems="flex-end" color="gray.300">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages?.length > 0 &&
          previousPages?.map((page) => (
            <PaginationButton
              onClick={() => onPageChange(page)}
              key={page}
              number={page}
            />
          ))}

        <PaginationButton
          onClick={() => onPageChange(currentPage)}
          number={currentPage}
          isCurrent
        />

        {nextPages?.length > 0 &&
          nextPages?.map((page) => (
            <PaginationButton
              onClick={() => onPageChange(page)}
              key={page}
              number={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text display="flex" alignItems="flex-end" color="gray.300">
                ...
              </Text>
            )}
            <PaginationButton
              onClick={() => onPageChange(lastPage)}
              number={lastPage}
            />
          </>
        )}
      </Stack>
    </Stack>
  )
}
