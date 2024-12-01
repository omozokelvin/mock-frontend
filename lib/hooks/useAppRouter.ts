'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export type QueryParamValue = string | boolean | number | null;

export enum QueryParamEnum {
  showModal = 'showModal',
  search = 'search',
  limit = 'limit',
  page = 'page',
  id = 'id',
  isVerified = 'isVerified',
  showCropDialog = 'showCropDialog',
  accessToken = 'accessToken',
  refreshToken = 'refreshToken',
  expiresIn = 'expiresIn',
  nextUrl = 'nextUrl',
  viewBio = 'viewBio',
  founder = 'founder',
  otpVerified = 'otpVerified',
  otpCodeSent = 'otpCodeSent',
  action = 'action',
  email = 'email',
  provider = 'provider',
  section = 'section',
  currentStep = 'currentStep',
  addFeature = 'addFeature',
  selectBrandColor = 'selectBrandColor',
  addProduct = 'addProduct',
  addCustomer = 'addCustomer',
  editCustomer = 'editCustomer',
  addWallet = 'addWallet',
  wallet = 'wallet',
  transactions = 'transactions',
  transactionSummary = 'transactionSummary',
}

export function useAppRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const params = useParams();

  const urlParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const getQueryParam = useCallback(
    (key: string) => {
      return urlParams.get(key);
    },
    [urlParams]
  );

  const setUrlParams = useCallback(
    (key: QueryParamEnum, value?: QueryParamValue) => {
      !!value || value === 0 || value === false
        ? urlParams.set(key, value.toString())
        : urlParams.delete(key);
    },
    [urlParams]
  );

  const setQueryParam = useCallback(
    (key: QueryParamEnum, value?: QueryParamValue) => {
      setUrlParams(key, value);

      router.push(pathname + `?${urlParams.toString()}`, {
        scroll: false,
      });
    },
    [pathname, router, urlParams, setUrlParams]
  );

  const setQueryParams = useCallback(
    (params: Partial<Record<QueryParamEnum, QueryParamValue>>) => {
      for (const [key, value] of Object.entries(params)) {
        setUrlParams(key as QueryParamEnum, value);
      }

      router.push(pathname + `?${urlParams.toString()}`, {
        scroll: false,
      });
    },
    [pathname, router, urlParams, setUrlParams]
  );

  const routeWithQueryParams = (
    route: string,
    queryParams: Record<string, string | undefined>
  ) => {
    const url = new URL(route, window.location.origin);

    Object.keys(queryParams).forEach((key) => {
      if (queryParams[key] !== undefined) {
        url.searchParams.append(key, queryParams[key]!);
      }
    });

    router.push(url.toString());
  };

  return {
    getQueryParam,
    setQueryParam,
    pathname,
    router,
    searchParams,
    setQueryParams,
    routeWithQueryParams,
    urlParams,
  };
}
