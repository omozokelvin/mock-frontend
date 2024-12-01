import AppLink from '@/lib/components/AppLink';
import Logo from '@/lib/components/Logo';
import { Box, Grid } from '@mui/material';
import { ReactNode } from 'react';
import routes from '@/lib/constants/routes';

type Props = {
  children: ReactNode;
};

export default function AuthLayout(props: Props) {
  return (
    //TODO: WE MAY NOT NEED AUTH CONTEXT PROVIDER HERE

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100dvh',
      }}
    >
      <Box sx={{ maxWidth: 500, flex: 1 }}>{props.children}</Box>
    </Box>
  );
}
