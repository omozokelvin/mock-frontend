'use client';
import { Box, Button, Card, Chip, Grid, Typography } from '@mui/material';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { SearchTextField } from '@/lib/components/SearchTextField';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useRouter } from 'next/navigation';
import routes from '@/lib/constants/routes';

import RecommendationsFilterPopover from '@/lib/components/RecommendationsFilterPopover';
import AppIcon from '@/lib/components/AppIcon';
import RecommendationChips from '@/app/(dashboard)/recommendations/_lib/RecommendationChips';

export default function RecommendationsPage() {
  const chips = [
    { label: 'Based on Repeating Alerts' },
    { label: 'Based on Repeating Alerts' },
    { label: 'Based on Repeating Alerts' },
    { label: 'Based on Repeating Alerts' },
    { label: 'Based on Repeating Alerts' },
    { label: 'Based on Repeating Alerts' },
    { label: 'Based on Repeating Alerts' },
    { label: 'Based on Repeating Alerts' },
    { label: 'Based on Repeating Alerts' },
  ];

  const router = useRouter();
  return (
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

      <Grid
        item
        xs={12}
        container
        columnSpacing={2}
        alignItems={'center'}
        sx={{ mb: 4 }}
      >
        <Grid item xs={5} container columnGap={2}>
          <SearchTextField
            sx={{
              backgroundColor: 'white',
              flex: 1,
            }}
          />

          <RecommendationsFilterPopover />
        </Grid>

        <Grid item xs={7} container justifyContent={'flex-end'}>
          <Typography variant="body2" color="GrayText">
            Showing 15 of 29 results
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Card sx={{ display: 'flex', flex: 1, p: 0 }}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              width: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <AppIcon width={50} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              p: 2,
              rowGap: 1,
            }}
          >
            <Box>
              <Typography variant="h2">Linux VMs best practices</Typography>
            </Box>

            <Typography variant="body2">
              Hardening VMS is crucial to mitigate the risks posed by
              misconfigurations, which can leave systems vulnerable to
              unauthorized access or exploitation. Misconfigured VMS increase
              the attack surface, allowing attackers to exploit weaknesses and
              potentially gain control over critical resources in the network.
            </Typography>

            <RecommendationChips chips={chips} />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
