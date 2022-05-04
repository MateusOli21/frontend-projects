import { FormHeader } from '@domains/contacts/ui/components';
import { Modal } from '@ui/components/Modal';
import { FilledButton } from '@ui/elements/buttons';
import { Input, Select } from '@ui/elements/forms';
import { BaseLayout } from '@ui/layouts/BaseLayout';

export const NewContactsPage = () => {
  return (
    <BaseLayout>
      <FormHeader title="Novo contato" />

      <form className="w-full flex flex-col gap-2">
        <Input placeholder="Nome" />

        <Input placeholder="E-mail" />

        <Input placeholder="Telefone" />

        <Select className="w-full">
          <option value="valor1">Valor 1</option>
        </Select>

        <FilledButton className="w-full mt-4 h-12">Cadastrar</FilledButton>
      </form>

      <Modal isOpen={false}>
        <span>testando modal</span>
      </Modal>
    </BaseLayout>
  );
};
