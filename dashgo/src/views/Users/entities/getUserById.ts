import { queryClient } from '@services/queryClient'
import { usersApi } from '../shared/api'

export const getUserById = async (userId: string) => {
  await queryClient.prefetchQuery(
    ['user', userId],
    async () => {
      const response = await usersApi.getUser(userId)

      return response.data
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    }
  )
}
