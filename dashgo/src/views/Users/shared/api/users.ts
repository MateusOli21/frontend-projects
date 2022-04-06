import { fakerApi } from '@services/apis/fakerApi'
import { UserProps } from '@views/Users/types'
import { AxiosPromise } from 'axios'

const BASE_URL = '/users'

type CreateUserProps = {
  name: string
  email: string
  created_at: Date
}

export const getUsers = (page = 1): AxiosPromise<{ users: UserProps[] }> => {
  return fakerApi.get(BASE_URL, {
    params: {
      page,
    },
  })
}

export const getUser = (userId: string): AxiosPromise<{ user: UserProps }> => {
  return fakerApi.get(`${BASE_URL}/${userId}`)
}

export const createUser = (
  user: CreateUserProps
): AxiosPromise<{ user: UserProps }> => {
  return fakerApi.post(BASE_URL, {
    user,
  })
}
