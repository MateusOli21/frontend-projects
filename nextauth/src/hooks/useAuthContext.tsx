import { AuthContext, AuthContextProps } from 'contexts/AuthContext';
import { useContext } from 'react';

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);
