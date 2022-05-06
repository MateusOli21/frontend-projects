import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';
import { faker } from '@faker-js/faker';

import { IContact } from '@domains/contacts/types';

export function makeServer() {
  const server = createServer({
    serializers: ActiveModelSerializer,
    models: {
      contact: Model.extend<Partial<IContact>>({}),
    },
    factories: {
      contact: Factory.extend({
        name(idx) {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        phone() {
          return faker.phone.phoneNumber('9########');
        },
        category() {
          return 'discord';
        },
      }),
    },
    seeds(server) {
      server.createList('contact', 3);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 350;

      this.get('/contacts', schema => {
        const contacts = schema.all('contact');

        return new Response(200, undefined, { contacts: contacts?.models });
      });

      this.post('/contacts');
      this.get('/contacts/:phone');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
