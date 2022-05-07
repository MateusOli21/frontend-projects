import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICreateContact } from '@domains/contacts/types';
import { clearPhoneNumber, formatPhone } from '@domains/contacts/utils';
import { contactsApi } from '@domains/contacts/infra/services';
import { FilledButton } from '@ui/elements/buttons';
import { Input, Select } from '@ui/elements/forms';

import { newContactSchema } from './schema';

type TErrorYup = { errors?: string | string[] };

export const ContactForm: React.FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [category, setCategory] = useState<string>('');

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

      await contactsApi.createContact(newContact);

      navigate('/');
    } catch (error) {
      const err = error as TErrorYup;
      alert(err?.errors);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="w-full flex flex-col gap-2">
      <Input placeholder="Nome" inputRef={nameRef} />

      <Input placeholder="E-mail" inputRef={emailRef} />

      <Input placeholder="Telefone" value={phone} onChange={onChangePhoneValue} />

      <Select
        className="w-full"
        placeholder="Categoria do contato"
        onChange={event => setCategory(event.target.value)}>
        <option value="discord">Discord</option>
        <option value="instagram">Instagram</option>
        <option value="facebook">Facebook</option>
      </Select>

      <FilledButton type="submit" className="w-full mt-4 h-12">
        Cadastrar
      </FilledButton>
    </form>
  );
};
