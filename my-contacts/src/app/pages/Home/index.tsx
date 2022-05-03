import { InputSearch } from '@ui/elements/InputSearch';
import { BaseLayout } from '@ui/layouts/BaseLayout';
import { ContactsListHeader } from '@domains/contacts/ui/components';

export const HomePage = () => {
  return (
    <BaseLayout>
      <InputSearch />

      <ContactsListHeader registeredContacts={4} />
    </BaseLayout>
  );
};
