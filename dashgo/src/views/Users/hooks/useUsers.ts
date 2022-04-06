import { useQuery } from 'react-query'

import { getUsersList } from '../entities/getUsersList'

export function useUsers(currentPage?: number) {
  return useQuery(['users', currentPage], () => getUsersList(currentPage), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
