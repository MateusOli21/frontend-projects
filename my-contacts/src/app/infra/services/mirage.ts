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
        name() {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        phone() {
          return faker.phone.phoneNumber('119########');
        },
        category() {
          return 'discord';
        },
      }),
    },
    seeds(mirageServer) {
      mirageServer.createList('contact', 3);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 150;

      this.get('/contacts', schema => {
        const contacts = schema.all('contact');

        return new Response(200, undefined, { contacts: contacts?.models });
      });

      this.post('/contacts', (schema, request) => {
        const newUser = JSON.parse(request.requestBody);

        return schema.create('contact', newUser);
      });

      this.patch('/contacts/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody);

        const contactId = request.params.id;

        const note = schema.find('contact', contactId);

        note?.update(newAttrs);

        return new Response(200, {}, note?.attrs);
      });

      this.get('/contacts/:id');

      this.delete('/contacts/:id');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
