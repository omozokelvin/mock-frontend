'use client';
import { LoadingPage } from '@/lib/components/LoadingPage';
import { getValidAccessToken } from '@/lib/constants/http';
import routes from '@/lib/constants/routes';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentType, useEffect, useState } from 'react';

export function withoutAuth<T>(Component: ComponentType<T>) {
  const HocComponent = (props: T) => {
    const router = useRouter();
    const pathname = usePathname();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
      const accessToken = getValidAccessToken();

      if (accessToken) {
        router.replace(routes.dashboard);
        return;
      }

      setChecking(false);
    }, [router, pathname]);

    return checking ? <LoadingPage /> : <Component {...(props as any)} />;
  };

  return HocComponent;
}
