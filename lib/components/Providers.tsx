import { theme } from '@/lib/theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import QueryProvider from '@/lib/providers/QueryProvider';

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AppRouterCacheProvider>
        <QueryProvider>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                overflowX: 'hidden',
                backgroundColor: (theme) => theme.palette.background.default,
              }}
            >
              {children}
            </Box>

            <ToastContainer
              hideProgressBar
              position="top-center"
              autoClose={10000}
              stacked
            />
          </ThemeProvider>
        </QueryProvider>
      </AppRouterCacheProvider>
    </LocalizationProvider>
  );
}
