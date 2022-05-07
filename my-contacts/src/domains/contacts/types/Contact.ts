export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
}

export type ICreateContact = Omit<IContact, 'id'>;
