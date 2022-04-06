import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useAuthContext } from 'hooks';

import { authApi } from '@services/api';
import { withSSRGuest } from 'utils/withSSRGuest';

const Dashboard: NextPage = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    authApi.get('/me').then(resp => console.log('resp', resp));
  });

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Este é o usuário {user?.email}</p>
    </div>
  );
};

export const getServerSideProps = withSSRGuest(
  'isNotAuthenticated',
  async () => {
    return {
      props: {},
    };
  }
);

export default Dashboard;
