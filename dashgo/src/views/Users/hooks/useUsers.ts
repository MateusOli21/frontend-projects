import { useQuery } from 'react-query'

import { api } from '@services/api'
import { UserProps } from '../types'

const handleGetUsers = async (): Promise<UserProps[]> => {
  const { data } = await api.get('/users')

  const users = data.users?.map((user: UserProps) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return users
}

export function useUsers() {
  return useQuery('users', handleGetUsers)
}
