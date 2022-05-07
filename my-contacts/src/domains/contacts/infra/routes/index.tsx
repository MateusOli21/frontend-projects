import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@app/pages/Home';
import { NewContactsPage } from '@app/pages/NewContact';
import { EditContactPage } from '@app/pages/EditContact';

export const ContactsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contatos/novo" element={<NewContactsPage />} />
      <Route path="/contatos/:id" element={<EditContactPage />} />
    </Routes>
  );
};
