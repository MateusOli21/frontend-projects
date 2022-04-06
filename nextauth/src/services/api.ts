import axios, { AxiosError, AxiosRequestHeaders, HeadersDefaults } from 'axios';
import { parseCookies, setCookie } from 'nookies';

export interface CommonHeaderProps extends HeadersDefaults {
  Authorization: string;
}

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestQueue: {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError<any, any>) => void;
}[] = [];

export const authApi = axios.create({
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
        cookies = parseCookies();

        const { 'nextauth.refreshToken': refreshToken } = cookies;
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          authApi
            .post('/refresh', { refreshToken })
            .then(response => {
              const { token, refreshToken: newRefreshToken } = response.data;

              setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
              });

              setCookie(undefined, 'nextauth.refreshToken', newRefreshToken, {
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
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSuccess: (token: string) => {
              if (originalConfig?.headers) {
                console.log('aqui');
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
        // logout user
      }
    }
  }
);
