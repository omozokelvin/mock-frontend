'use client';
import AppLayout from '@/app/(dashboard)/_lib/AppLayout';
import { withAuth } from '@/lib/HOC/withAuth';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
function DashboardLayout(props: Props) {
  return <AppLayout>{props.children}</AppLayout>;
}

export default withAuth(DashboardLayout);
