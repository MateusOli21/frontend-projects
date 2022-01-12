import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

import logoIcon from 'modules/Home/assets/images/logo.svg';
import { SignInButton } from '@commons/components/elements/buttons';
import { ActiveLink } from '../ActiveLink';

import { Container, Nav } from './styles';

export const Header: React.FC = () => {
  const session = useSession();

  return (
    <Container>
      <div className="content">
        <div className="header-links">
          <img src={logoIcon} alt="logo" />

          <Nav>
            <ActiveLink name="Home" link="/" />
            <ActiveLink name="Posts" link="/posts" />
          </Nav>
        </div>

        {session.status === 'authenticated' ? (
          <SignInButton
            onClick={() => signOut()}
            text={`Olá, ${session.data?.user?.name}`}
            isLogout
          />
        ) : (
          <SignInButton
            onClick={() => signIn('github')}
            text="Entre com github"
          />
        )}
      </div>
    </Container>
  );
};
