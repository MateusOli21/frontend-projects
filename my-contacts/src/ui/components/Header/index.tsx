import React from 'react';

import appLogo from '@app/assets/images/logo.svg';

export const Header: React.FC = () => {
  return (
    <div className="h-36 flex w-full items-center justify-center">
      <img src={appLogo} alt="My Contacts" />
    </div>
  );
};
