import { Box } from '@mui/material';

type props = {
  light?: boolean;
};

export const Loading = (props: props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: '200px', animation: 'pulse 2s infinite' }}
    >
      Loading...
    </Box>
  );
};
