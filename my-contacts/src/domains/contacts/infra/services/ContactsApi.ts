import { AxiosInstance, AxiosResponse } from 'axios';

import { fakeApi } from '@app/infra/services/apis/fakeApi';
import { IContact, ICreateContact } from '@domains/contacts/types';

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

  async findContactById(contactId: string): Promise<AxiosResponse<{ contact: IContact }>> {
    const response = await this.api.get(`${BASE_URL}/${contactId}`);

    return response;
  }

  async createContact(
    newContact: ICreateContact
  ): Promise<AxiosResponse<{ contacts: IContact[] }>> {
    const response = await this.api.post(BASE_URL, newContact);

    return response;
  }

  async updateContact(
    accountId: string,
    updatedContact: Partial<IContact>
  ): Promise<AxiosResponse<IContact>> {
    const response = await this.api.patch(`${BASE_URL}/${accountId}`, updatedContact);

    return response;
  }

  async deleteAccount(accountId: string): Promise<void> {
    await this.api.delete(`${BASE_URL}/${accountId}`);
  }
}
