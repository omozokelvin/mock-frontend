import storage from '@/lib/constants/storage';
import { QueryParamEnum } from '@/lib/hooks/useAppRouter';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

export type HttpErrorResponse = {
  readonly message: string;
};

export type ExtendedAxiosRequestConfig = AxiosRequestConfig & {
  ignoreAuth?: boolean;
  hideErrorMessage?: boolean;
  retry?: boolean;
};

const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const httpService = axios.create({ baseURL });

export const setAccessToken = (accessToken: string | null) => {
  if (!accessToken) {
    storage.localStorage.remove(QueryParamEnum.accessToken);

    delete httpService.defaults.headers.common.Authorization;
    return;
  }

  storage.localStorage.set(QueryParamEnum.accessToken, accessToken);
  httpService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const isValidToken = (token: string) => {
  if (!token) {
    return false;
  }

  const decoded = jwtDecode<{ exp: number }>(token);
  const currentTime = Date.now() / 1000;

  const isStillValid = decoded.exp > currentTime;

  return isStillValid;
};

export const getValidAccessToken = () => {
  const accessToken =
    storage.localStorage.get(QueryParamEnum.accessToken) || '';

  if (!isValidToken(accessToken)) {
    return '';
  }

  return accessToken;
};

const handleError = (error: AxiosError<HttpErrorResponse, any>) => {
  const message =
    error?.response?.data?.message || error?.message || 'Something went wrong';

  if (!message) {
    return;
  }

  toast.error(message);
};

httpService.interceptors.request.use(
  async (config) => {
    const Authorization = config.headers.Authorization;

    if (Authorization) {
      return config;
    }

    const validAccessToken = await getValidAccessToken();

    if (validAccessToken) {
      config.headers.Authorization = `Bearer ${validAccessToken}`;
      httpService.defaults.headers.common.Authorization = `Bearer ${validAccessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError<HttpErrorResponse>) => {
    const errorConfig = error.config as ExtendedAxiosRequestConfig;
    const hideErrorMessage = errorConfig?.hideErrorMessage;

    !hideErrorMessage && handleError(error);
    return Promise.reject(error?.response?.data);
  }
);
