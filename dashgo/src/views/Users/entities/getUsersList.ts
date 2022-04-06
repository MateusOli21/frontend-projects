import { usersApi } from '../shared/api'
import { UserProps } from '../types'

export const getUsersList = async (
  currentPage?: number
): Promise<{ users: UserProps[]; totalCount: number }> => {
  const { data, headers } = await usersApi.getUsers(currentPage)

  const totalRegisters = Number(headers['x-total-count'])

  const users = data?.users?.map((user: UserProps) => ({
    ...user,
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return { users, totalCount: totalRegisters }
}
