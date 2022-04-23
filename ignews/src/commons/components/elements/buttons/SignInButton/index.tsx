import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

import { SecondaryButton } from '../SecondaryButton';

export const SignInButton: React.FC = () => {
  const session = useSession();

  if (session.status === 'authenticated') {
    return (
      <SecondaryButton onClick={() => signOut()} style={{ gap: '0.5rem' }}>
        <FaGithub size={16} color="#eba417" />
        {`Olá, ${session.data?.user?.name}`}
        <MdLogout style={{ marginLeft: '12px' }} size={16} color="#fff" />
      </SecondaryButton>
    );
  }

  return (
    <SecondaryButton onClick={() => signIn('github')} style={{ gap: '0.5rem' }}>
      <FaGithub size={16} color="#eba417" />
      Entre com github
    </SecondaryButton>
  );
};
