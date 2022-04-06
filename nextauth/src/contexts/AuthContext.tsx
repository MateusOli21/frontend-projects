import { authApi } from '@services/api';
import { createContext, ReactNode } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextProps = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = false;

  const signIn = async ({ email, password }: SignInCredentials) => {
    console.log(email);

    try {
      const response = await authApi.post('/sessions', {
        email,
        password,
      });
      console.log(
        '🚀 ~ file: AuthContext.tsx ~ line 31 ~ signIn ~ response',
        response
      );
    } catch (err) {
      console.log('🚀 ~ file: AuthContext.tsx ~ line 32 ~ signIn ~ err', err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
