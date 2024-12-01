import MuiDrawer from '@mui/material/Drawer';

import { CSSObject, styled, Theme } from '@mui/material/styles';

import { DRAWER_WIDTH } from '@/app/(dashboard)/_lib/constants';
import DashboardNavList from '@/app/(dashboard)/_lib/DashboardNavList';
import Logo from '@/lib/components/Logo';
import { Box } from '@mui/material';

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: theme.palette.common.white,
  '::-webkit-scrollbar': {
    width: '4px',
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.palette.grey[400],
    // borderRadius: '100px',
  },
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: theme.palette.background.default,
  '::-webkit-scrollbar': {
    width: '4px',
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.palette.grey[400],
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const DrawerContents = ({ open }: { open: boolean }) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={open ? 2.5 : 2}
        py={2}
      >
        <Logo width={150} />
      </Box>

      <DashboardNavList open={open} />
    </>
  );
};

export default function SideDrawer() {
  const open = true;

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerContents open={open} />
    </Drawer>
  );
}
