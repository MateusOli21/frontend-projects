import { createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker'

import { UserProps } from '@views/Users/types'

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<UserProps>>({}),
    },
    factories: {
      user: Factory.extend({
        name(idx) {
          return faker.name.findName()
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        },
      }),
    },
    seeds(server) {
      server.createList('user', 10)
    },
    routes() {
      this.namespace = 'api'
      this.timing = 500

      this.get('/users')
      this.post('/users')
      this.delete('/users')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
