import React from 'react';

import logoIcon from 'modules/Home/assets/images/logo.svg';

import { SignInButton } from '@commons/components/elements/buttons';
import { ActiveLink } from '../ActiveLink';

import { Container, Nav } from './styles';

export const Header: React.FC = () => {
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

        <SignInButton />
      </div>
    </Container>
  );
};
