'use client';
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
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack
            sx={{
              minWidth: '100%',
              minHeight: '100vh',
            }}
          >
            <Box pt={4} p={3} flexGrow={1}>
              {props.children}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
