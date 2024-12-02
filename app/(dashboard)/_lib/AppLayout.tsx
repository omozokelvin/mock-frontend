'use client';
import { DRAWER_WIDTH } from '@/app/(dashboard)/_lib/constants';
import SideDrawer from '@/app/(dashboard)/_lib/SideDrawer';
import { Box, CssBaseline, Stack } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function AppLayout(props: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#F7FAFD',
        overflowX: 'auto',
      }}
    >
      <CssBaseline />

      <SideDrawer />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          minHeight: '100vh',
          p: 2,
          width: `calc(100vw - ${DRAWER_WIDTH}px)`,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
