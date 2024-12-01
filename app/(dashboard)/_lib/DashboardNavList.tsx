import NavList from '@/app/(dashboard)/_lib/NavList';
import { List, Grid } from '@mui/material';

import { FC } from 'react';

const DashboardNavList: FC<{ open: boolean }> = ({ open }) => {
  return (
    <List
      sx={{
        fontSize: '0.875rem',
        fontWeight: 400,
        pt: 4,
      }}
    >
      <Grid container direction="column" justifyContent="space-between">
        <Grid item>
          <NavList open={open} />
        </Grid>

        {/* {open && (
            <Grid item mx={3}>
              <RoleToggleButton />
            </Grid>
          )} */}
      </Grid>
    </List>
  );
};

export default DashboardNavList;
