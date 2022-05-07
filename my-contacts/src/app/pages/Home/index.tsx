import { useEffect, useState } from 'react';

import { Input } from '@ui/elements/forms/Input';
import { BaseLayout } from '@ui/layouts/BaseLayout';
import { ContactCard, ContactsListHeader } from '@domains/contacts/ui/components';
import { contactsApi } from '@domains/contacts/infra/services';
import { IContact } from '@domains/contacts/types';
import { showToast } from '@domains/contacts/utils';

export const HomePage = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  const handleUpdatedContactsAfterDelete = (deletedAccountId: string) => {
    const filteredContacts = contacts?.filter(contact => contact.id !== deletedAccountId);

    setContacts(filteredContacts);
  };

  const handleListContacts = async () => {
    try {
      const response = await contactsApi.getContacts();

      setContacts(response.data?.contacts);
    } catch (err) {
      showToast('Ocorreu um erro ao tentar buscar sua lista de contatos', 'error');
    }
  };

  useEffect(() => {
    handleListContacts();
  }, []);

  return (
    <BaseLayout>
      <Input placeholder="Pesquisar contato..." />

      <ContactsListHeader registeredContacts={contacts?.length} />

      <div className="w-full flex flex-col gap-2">
        {contacts?.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            handleUpdatedContactsAfterDelete={handleUpdatedContactsAfterDelete}
          />
        ))}
      </div>
    </BaseLayout>
  );
};
