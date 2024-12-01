import { Loading } from '@/lib/components/Loading';
import { Box } from '@mui/material';

export const LoadingPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'gold.100',
        zIndex: 9999,
      }}
      id="page-loading"
    >
      <Loading />
    </Box>
  );
};
