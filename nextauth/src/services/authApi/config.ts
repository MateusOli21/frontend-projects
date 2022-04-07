import axios, { AxiosError, AxiosInstance, HeadersDefaults } from 'axios';
import { handleSignOut } from 'contexts/AuthContext';
import { GetServerSidePropsContext } from 'next';
import { parseCookies, setCookie } from 'nookies';
import { AuthTokenError } from './errors/AuthTokenError';

export interface CommonHeaderProps extends HeadersDefaults {
  Authorization: string;
}

let isRefreshing = false;
let failedRequestQueue: {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError<any, any>) => void;
}[] = [];

export function baseApiInstance(
  ctx?: undefined | GetServerSidePropsContext
): AxiosInstance {
  let cookies = parseCookies(ctx);

  const authApi = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`,
    },
  });

  authApi.interceptors.response.use(
    response => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response?.data?.code === 'token.expired') {
          cookies = parseCookies(ctx);

          const { 'nextauth.refreshToken': refreshToken } = cookies;
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            // process to refresh tokens
            authApi
              .post('/refresh', { refreshToken })
              .then(response => {
                const { token, refreshToken: newRefreshToken } = response.data;

                setCookie(ctx, 'nextauth.token', token, {
                  maxAge: 60 * 60 * 24, // 1 day
                  path: '/',
                });

                setCookie(ctx, 'nextauth.refreshToken', newRefreshToken, {
                  maxAge: 60 * 60 * 24, // 1 day
                  path: '/',
                });

                authApi.defaults.headers = {
                  Authorization: `Bearer ${token}`,
                } as CommonHeaderProps;

                failedRequestQueue?.forEach(req => req.onSuccess(token));
                failedRequestQueue = [];
              })
              .catch(err => {
                failedRequestQueue?.forEach(req => req.onFailure(err));
                failedRequestQueue = [];

                if (typeof window !== 'undefined') {
                  handleSignOut();
                } else {
                  return Promise.reject(new AuthTokenError());
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          // create promise to resolve all error api call
          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              onSuccess: (token: string) => {
                if (originalConfig?.headers) {
                  originalConfig.headers['Authorization'] = `Bearer ${token}`;
                }

                resolve(authApi(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (typeof window !== 'undefined') {
            handleSignOut();
          } else {
            return Promise.reject(new AuthTokenError());
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return authApi;
}
