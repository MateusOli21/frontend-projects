import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { StyledLink } from './styles';

interface ActiveLinkProps {
  name: string;
  link: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({ name, link }) => {
  const { pathname } = useRouter();

  return (
    <Link href={link}>
      <StyledLink className={pathname === link ? 'active' : ''}>
        {name}
      </StyledLink>
    </Link>
  );
};
