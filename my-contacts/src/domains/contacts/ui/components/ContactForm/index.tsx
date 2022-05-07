import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input, Select } from '@ui/elements/forms';
import { FilledButton } from '@ui/elements/buttons';
import { contactsApi } from '@domains/contacts/infra/services';
import { IContact, ICreateContact } from '@domains/contacts/types';
import { clearPhoneNumber, formatPhone, showToast } from '@domains/contacts/utils';

import { newContactSchema } from './schema';

const selectCategoryOptions = ['discord', 'instagram', 'facebook'];

type TErrorYup = { errors?: string[] };

interface ContactFormProps {
  isEditContact?: boolean;
  contact?: IContact;
}

export const ContactForm: React.FC<ContactFormProps> = ({ contact, isEditContact }) => {
  const [phone, setPhone] = useState<string>(contact?.phone || '');
  const [category, setCategory] = useState<string>(contact?.category || '');

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onChangePhoneValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const newContact: ICreateContact = {
        name: nameRef.current?.value as string,
        email: emailRef.current?.value as string,
        phone: clearPhoneNumber(phone),
        category,
      };

      await newContactSchema.validate(newContact, { abortEarly: true });

      if (isEditContact && contact) {
        await contactsApi.updateContact(contact.id, newContact);
      } else {
        await contactsApi.createContact(newContact);
      }

      navigate('/');
    } catch (error) {
      const err = error as TErrorYup;

      err?.errors?.map((er: string) => showToast(er, 'warn'));
    }
  };

  useEffect(() => {
    if (contact) {
      setPhone(formatPhone(contact.phone));
      setCategory(contact.category);
    }

    return () => setPhone('');
  }, [contact]);

  return (
    <form onSubmit={onFormSubmit} className="w-full flex flex-col gap-2">
      <Input placeholder="Nome" inputRef={nameRef} defaultValue={contact?.name} />

      <Input placeholder="E-mail" inputRef={emailRef} defaultValue={contact?.email} />

      <Input placeholder="Telefone" value={phone} onChange={onChangePhoneValue} />

      <Select
        className="w-full"
        placeholder="Categoria do contato"
        value={contact?.category}
        onChange={event => setCategory(event.target.value)}>
        {selectCategoryOptions.map(item => (
          <option key={item} value={item} className="capitalize">
            {item}
          </option>
        ))}
      </Select>

      <FilledButton type="submit" className="w-full mt-4 h-12">
        {isEditContact ? 'Salvar' : 'Cadastrar'}
      </FilledButton>
    </form>
  );
};
