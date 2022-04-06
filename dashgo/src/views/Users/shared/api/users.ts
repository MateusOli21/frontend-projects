import { api } from '@services/api'
import { UserProps } from '@views/Users/types'
import { AxiosPromise } from 'axios'

const BASE_URL = '/users'

export const getUsers = (page = 1): AxiosPromise<{ users: UserProps[] }> => {
  return api.get(BASE_URL, {
    params: {
      page,
    },
  })
}

export const getUser = (userId: string): AxiosPromise<{ user: UserProps }> => {
  return api.get(`${BASE_URL}/${userId}`)
}
