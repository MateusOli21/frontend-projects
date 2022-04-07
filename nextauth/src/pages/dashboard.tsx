import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useAuthContext } from 'hooks';

import { authApi } from '@services/authApi';
import { withSSRGuest } from 'utils/withSSRGuest';
import { baseApiInstance } from '@services/authApi/config';

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
  async ctx => {
    try {
      // create new api instance to use on server side
      const authApi = baseApiInstance(ctx);
      await authApi.get('/me');
    } catch {
      //throw some error
    }

    return {
      props: {},
    };
  }
);

export default Dashboard;
