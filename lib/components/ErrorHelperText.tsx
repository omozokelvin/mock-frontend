import { Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  touched: boolean | undefined;
  errorMessage: string | undefined;
};

export const ErrorHelperText: FC<Props> = ({
  touched = false,
  errorMessage = '',
}) => {
  if (!touched) {
    return <></>;
  }

  if (!errorMessage) {
    return <></>;
  }

  return (
    <Typography fontSize="0.85rem" color="error" component="span">
      {errorMessage}
    </Typography>
  );
};
