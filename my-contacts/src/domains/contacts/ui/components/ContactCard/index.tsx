import React from 'react';
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi';

import { IContact } from '@domains/contacts/types';

interface ContactCardProps {
  contact: IContact;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
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
          <BiEditAlt size={16} className="cursor-pointer text-black" />
          <BiTrashAlt size={16} className="cursor-pointer text-black" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-gray-500 font-light">{contact?.email}</span>
        <span className="text-gray-500 font-light">{contact?.phone}</span>
      </div>
    </div>
  );
};
