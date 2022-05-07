import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi';

import { IContact } from '@domains/contacts/types';
import { formatPhone, showToast } from '@domains/contacts/utils';
import { contactsApi } from '@domains/contacts/infra/services';

interface ContactCardProps {
  contact: IContact;
  handleUpdatedContactsAfterDelete: (deletedAccountId: string) => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  handleUpdatedContactsAfterDelete,
}) => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      await contactsApi.deleteAccount(contact.id);
      handleUpdatedContactsAfterDelete(contact.id);

      showToast('Contato deletado com sucesso');
    } catch (err) {
      showToast('Ocorreu um erro ao tentar excluir contato', 'error');
    }
  };

  return (
    <div className="bg-white-100 shadow-md p-4 rounded-lg">
      <div className="flex justify-between mb-4">
        <div className="">
          <strong>{contact?.name}</strong>

          <span className="py-1 px-2 bg-blue-200 ml-2 rounded-md font-medium text-sm text-blue-800">
            {contact?.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <BiEditAlt
            size={16}
            className="cursor-pointer text-black"
            onClick={() => navigate(`/contatos/${contact.id}`)}
          />
          <BiTrashAlt
            size={16}
            className="cursor-pointer text-black"
            onClick={handleDeleteAccount}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-gray-500 font-light">{contact?.email}</span>
        <span className="text-gray-500 font-light">{formatPhone(contact?.phone)}</span>
      </div>
    </div>
  );
};
