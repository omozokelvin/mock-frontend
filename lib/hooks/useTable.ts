import { useAppRouter, QueryParamEnum } from '@/lib/hooks/useAppRouter';
import { ChangeEvent } from 'react';

type Params = {
  limit?: number;
};
export default function useTable(params?: Params) {
  const { pathname } = useAppRouter();
  const { setQueryParam, getQueryParam, setQueryParams } = useAppRouter();

  const search = getQueryParam(QueryParamEnum.search) || '';
  const limit =
    pathname === '/dashboard/wallet/'
      ? 5
      : Number(getQueryParam(QueryParamEnum.limit)) || params?.limit || 10;
  const page = Number(getQueryParam(QueryParamEnum.page)) || 1;

  const setSearch = (value: string) => {
    setQueryParam(QueryParamEnum.search, value);
  };

  const setLimit = (value: number) => {
    setQueryParam(QueryParamEnum.limit, value);
  };

  const setPage = (value: number) => {
    setQueryParam(QueryParamEnum.page, value);
  };

  const onRowsPerPageChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQueryParams({
      [QueryParamEnum.limit]: parseInt(event.target.value, 10),
      [QueryParamEnum.page]: 1,
    });
  };

  return {
    search,
    setSearch,
    limit,
    setLimit,
    page,
    setPage,
    onRowsPerPageChange,
  };
}
