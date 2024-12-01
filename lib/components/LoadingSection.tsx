import { Loading } from '@/lib/components/Loading';
import { Grid } from '@mui/material';
import { CSSProperties } from 'react';

type Props = {
  minHeight?: CSSProperties['minHeight'];
};
export default function LoadingSection(props: Props) {
  const { minHeight } = props;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: minHeight ?? 400 }}
    >
      <Loading />
    </Grid>
  );
}
