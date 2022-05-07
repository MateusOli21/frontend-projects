import { BrowserRouter as Router } from 'react-router-dom';

import { ContactsRoutes } from '@domains/contacts/infra/routes';

export const AppRoutes = () => {
  return (
    <Router>
      <ContactsRoutes />
    </Router>
  );
};
