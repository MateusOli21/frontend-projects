import { Input } from '@ui/elements/forms/Input';
import { BaseLayout } from '@ui/layouts/BaseLayout';
import { ContactsListHeader } from '@domains/contacts/ui/components';

export const HomePage = () => {
  return (
    <BaseLayout>
      <Input placeholder="Pesquisar contato..." />

      <ContactsListHeader registeredContacts={4} />
    </BaseLayout>
  );
};
