import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

import { SecondaryButton } from '../SecondaryButton';

interface SignInButtonProps {
  onClick: () => void;
  text: string;
  isLogout?: boolean;
}

export const SignInButton: React.FC<SignInButtonProps> = ({
  onClick,
  text,
  isLogout,
}) => {
  return (
    <SecondaryButton onClick={onClick} style={{ gap: '0.5rem' }}>
      <FaGithub size={16} color="#eba417" />
      {text}
      {isLogout && (
        <MdLogout style={{ marginLeft: '12px' }} size={16} color="#fff" />
      )}
    </SecondaryButton>
  );
};
