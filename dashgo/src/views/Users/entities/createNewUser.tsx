import { usersApi } from '../shared/api'
import { CreateUserFormProps } from '../types'

export const handleCreateNewUser = async (newUser: CreateUserFormProps) => {
  const response = await usersApi.createUser({
    ...newUser,
    created_at: new Date(),
  })

  return response.data.user
}
