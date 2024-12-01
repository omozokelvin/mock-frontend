'use client';
import { LoadingPage } from '@/lib/components/LoadingPage';
import { getValidAccessToken } from '@/lib/constants/http';
import routes from '@/lib/constants/routes';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentType, FC, useEffect, useState } from 'react';

export const withAuth = <T extends {}>(Component: ComponentType<T>) => {
  const HocComponent: FC<T> = (props: T) => {
    const router = useRouter();
    const pathname = usePathname();

    const [checking, setChecking] = useState(true);

    useEffect(() => {
      const accessToken = getValidAccessToken();

      if (!accessToken) {
        router.push(routes.login);

        return;
      }

      setChecking(false);
    }, [pathname, router]);

    return checking ? <LoadingPage /> : <Component {...props} />;
  };

  return HocComponent;
};
