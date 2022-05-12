import { Link } from 'react-router-dom';

import { OutlinedButton } from '@ui/elements/buttons/OutlinedButton';

interface ContactsListHeaderProps {
  registeredContacts: number;
}

export const ContactsListHeader: React.FC<ContactsListHeaderProps> = ({ registeredContacts }) => {
  return (
    <div className="w-full flex justify-between items-center mt-12 mb-9 pb-6 border-b border-gray-300">
      <strong className="text-lg">{registeredContacts} contatos</strong>

      <Link to="/contatos/novo">
        <OutlinedButton>Novo contato</OutlinedButton>
      </Link>
    </div>
  );
};
