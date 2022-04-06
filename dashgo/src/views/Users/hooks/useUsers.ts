import { useQuery } from 'react-query'

import { api } from '@services/api'
import { UserProps } from '../types'

const handleGetUsers = async (
  currentPage?: number
): Promise<{ users: UserProps[]; totalCount: number }> => {
  const { data, headers } = await api.get('/users', {
    params: {
      page: currentPage,
    },
  })

  const totalRegisters = Number(headers['x-total-count'])

  const users = data.users?.map((user: UserProps) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return { users, totalCount: totalRegisters }
}

export function useUsers(currentPage?: number) {
  return useQuery(['users', currentPage], () => handleGetUsers(currentPage))
}
