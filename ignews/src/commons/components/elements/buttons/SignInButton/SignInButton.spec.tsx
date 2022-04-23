import { useSession } from 'next-auth/react';
import { screen } from '@testing-library/dom';
import { render } from 'tests/utils/customRender';

import { SignInButton } from '.';

jest.mock('next-auth/react');

const useSessionMocked = jest.mocked(useSession);

describe('SignInButton component', () => {
  it('should render correctly when user is not authenticated', () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    });

    render(<SignInButton />);

    expect(screen.getByText('Entre com github')).toBeInTheDocument();
  });

  it('should render correctly when user is authenticated', () => {
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: 'Jhon Doe', email: 'jhon.doe@test.com' },
        expires: '-',
      },
      status: 'authenticated',
    });

    render(<SignInButton />);

    expect(screen.getByText('Olá, Jhon Doe')).toBeInTheDocument();
  });
});
