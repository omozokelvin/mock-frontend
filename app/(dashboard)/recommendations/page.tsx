'use client';
import { Box, Button, Grid, Typography } from '@mui/material';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { SearchTextField } from '@/lib/components/SearchTextField';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useRouter } from 'next/navigation';
import routes from '@/lib/constants/routes';

import FliterPopover from '@/lib/components/FilterPopover';

export default function RecommendationsPage() {
  const router = useRouter();
  return (
    <main>
      <Grid container>
        <Grid
          item
          xs={12}
          container
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ mb: 8 }}
        >
          <Box
            display="flex"
            flexDirection={'row'}
            alignItems={'center'}
            columnGap={1}
          >
            <Typography variant="h1">Recommendations</Typography>
            <AutoAwesomeOutlinedIcon color="primary" />
          </Box>

          <Button
            onClick={() => {
              router.push(routes.recommendationsArchive());
            }}
            color="inherit"
            startIcon={<Inventory2OutlinedIcon />}
          >
            Archive
          </Button>
        </Grid>

        <Grid item xs={12} container columnSpacing={2} alignItems={'center'}>
          <Grid item xs={5} container columnGap={2}>
            <SearchTextField
              sx={{
                backgroundColor: 'white',
                flex: 1,
              }}
            />

            <FliterPopover />
          </Grid>

          <Grid item xs={7} container justifyContent={'flex-end'}>
            <Typography variant="body2" color="GrayText">
              Showing 15 of 29 results
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
