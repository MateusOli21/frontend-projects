import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Modal } from '@ui/components/Modal';
import { BaseLayout } from '@ui/layouts/BaseLayout';
import { ContactForm, FormHeader } from '@domains/contacts/ui/components';
import { contactsApi } from '@domains/contacts/infra/services';
import { IContact } from '@domains/contacts/types';

export const EditContactPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const [contact, setContact] = useState<IContact | undefined>(undefined);

  const handleGetContactData = async () => {
    if (id) {
      try {
        const response = await contactsApi.findContactById(id);

        setContact(response.data.contact);
      } catch {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    handleGetContactData();

    return () => setContact(undefined);
  }, []);

  return (
    <BaseLayout>
      <FormHeader title="Editar contato" />

      <ContactForm contact={contact} isEditContact />

      <Modal isOpen={false}>
        <span>testando modal</span>
      </Modal>
    </BaseLayout>
  );
};
