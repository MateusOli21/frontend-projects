import { createServer, Factory, Model, Response } from 'miragejs'
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
      server.createList('user', 100)
    },
    routes() {
      this.namespace = 'api'
      this.timing = 500

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd
        )

        return new Response(200, { 'x-total-count': String(total) }, { users })
      })
      this.post('/users')
      this.delete('/users')
      this.get('/users/:id')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
