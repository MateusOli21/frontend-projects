import { AxiosInstance, AxiosResponse } from 'axios';

import { fakeApi } from '@app/infra/services/apis/fakeApi';
import { IContact } from '@domains/contacts/types';

const BASE_URL = '/contacts';

export class ContactsApi {
  api: AxiosInstance;

  constructor() {
    this.api = fakeApi;
  }

  async getContacts(): Promise<AxiosResponse<{ contacts: IContact[] }>> {
    const response = await this.api.get(BASE_URL);

    return response;
  }

  async createContact(newContact: IContact): Promise<AxiosResponse<{ contacts: IContact[] }>> {
    const response = await this.api.post(BASE_URL, newContact);

    return response;
  }
}
