import { httpService, setAccessToken } from '@/lib/constants/http';
import routes from '@/lib/constants/routes';

import { useMutation } from '@tanstack/react-query';

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginSuccess = {
  token: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (body: LoginPayload) => {
      const { data } = await httpService.post<LoginSuccess>('login', body);

      return data;
    },
    onSuccess: (authSuccess) => {
      const { token } = authSuccess;

      setAccessToken(token);
    },
  });
};
