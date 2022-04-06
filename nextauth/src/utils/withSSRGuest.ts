import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { parseCookies } from 'nookies';

export function withSSRGuest<P>(
  verification: 'isAuthenticated' | 'isNotAuthenticated',
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
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

    return await fn(ctx);
  };
}
