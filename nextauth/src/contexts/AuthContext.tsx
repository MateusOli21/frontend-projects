import { createContext, ReactNode, useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/router';

import { authApi, CommonHeaderProps } from '@services/api';

type AuthProviderProps = {
  children: ReactNode;
};

type UserProps = {
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextProps = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: UserProps | null;
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  const router = useRouter();

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await authApi.post('/sessions', {
        email,
        password,
      });

      const { permissions, roles, token, refreshToken } = response.data;

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      setUser({
        email,
        permissions,
        roles,
      });

      authApi.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as CommonHeaderProps;

      router.push('/dashboard');
    } catch (err) {
      // throw error
    }
  };

  const onReloadWindow = async () => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      const response = await authApi.get('/me');

      const { permissions, roles, email } = response?.data;

      setUser({ email, permissions, roles });
    }
  };

  useEffect(() => {
    onReloadWindow();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
