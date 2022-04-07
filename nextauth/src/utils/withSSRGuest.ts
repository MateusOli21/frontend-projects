import { destroyCookie, parseCookies } from 'nookies';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { AuthTokenError } from '@services/authApi/errors/AuthTokenError';

export function withSSRGuest<P>(
  verification: 'isAuthenticated' | 'isNotAuthenticated',
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P> | undefined> => {
    const cookies = parseCookies(ctx);

    if (verification === 'isAuthenticated') {
      if (cookies['nextauth.token']) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false,
          },
        };
      }
    }

    if (verification === 'isNotAuthenticated') {
      if (!cookies['nextauth.token']) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, 'nextauth.token');
        destroyCookie(ctx, 'nextauth.refreshToken');

        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }
  };
}
