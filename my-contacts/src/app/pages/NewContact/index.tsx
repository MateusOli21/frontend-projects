import { ContactForm, FormHeader } from '@domains/contacts/ui/components';
import { BaseLayout } from '@ui/layouts/BaseLayout';
import { Modal } from '@ui/components/Modal';

export const NewContactsPage = () => {
  return (
    <BaseLayout>
      <FormHeader title="Novo contato" />

      <ContactForm />

      <Modal isOpen={false}>
        <span>testando modal</span>
      </Modal>
    </BaseLayout>
  );
};
