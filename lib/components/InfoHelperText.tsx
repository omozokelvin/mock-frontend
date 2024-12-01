import { InfoOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: string | ReactNode;
};

export default function InfoHelperchildren({ children }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 1,
        mt: 1,
      }}
    >
      <InfoOutlined color="primary" fontSize="small" />
      <Typography variant="label">{children}</Typography>
    </Box>
  );
}
