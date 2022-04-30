import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@app/pages/Home';
import { NewContactsPage } from '@app/pages/NewContact';

export const ContactsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contatos/novo" element={<NewContactsPage />} />
    </Routes>
  );
};
