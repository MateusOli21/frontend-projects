import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import { GlobalStyles, styledTheme } from 'commons/styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={styledTheme}>
      <NextAuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </NextAuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
