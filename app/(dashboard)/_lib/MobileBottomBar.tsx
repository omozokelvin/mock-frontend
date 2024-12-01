import { menuItems } from '@/app/(dashboard)/_lib/NavList';
import { routes } from '@/lib/constants/routes';
import { useAuth } from '@/lib/providers/AuthContext';
import { RootState, useSelector } from '@/lib/redux/store';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC, useMemo } from 'react';

type Props = {
  onOpenSidebar: () => void;
};

const listItemSx = { width: '24px', margin: 'unset' };

const MobileBottomBar: FC<Props> = (props) => {
  const { isAdmin } = useSelector((state: RootState) => state.userSlice);

  const { onOpenSidebar } = props;
  const router = useRouter();

  const menuItems = useMemo(() => {
    if (!isAdmin) {
      const nonAdminRoutes = menuItems.slice(0, 4).map((item) => ({
        title: item.name,
        icon: item.icon,
        onClick: () => {
          router.push(item.link);
        },
      }));

      nonAdminRoutes.push({
        title: 'More',
        icon: <MoreVertOutlinedIcon sx={listItemSx} />,
        onClick: onOpenSidebar,
      });

      return nonAdminRoutes;
    }

    if (isAdmin) {
      return [
        {
          title: 'Home',
          icon: <DashboardOutlinedIcon sx={listItemSx} />,
          onClick: () => {
            router.push(routes.console);
          },
        },
        {
          title: 'Users',
          icon: <EventAvailableOutlinedIcon sx={listItemSx} />,
          onClick: () => {
            router.push(routes.console);
          },
        },
        {
          title: 'Payments',
          icon: <AttachMoneyOutlinedIcon sx={listItemSx} />,
          onClick: () => {
            router.push(routes.console);
          },
        },
        {
          title: 'More',
          icon: <MoreVertOutlinedIcon sx={listItemSx} />,
          onClick: onOpenSidebar,
        },
      ];
    }

    return [];
  }, [onOpenSidebar, router, isAdmin]);

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #DFE3E8',
        display: { xs: 'block', md: 'none' },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {menuItems.map((item, index) => (
          <IconButton
            key={index}
            sx={{
              color: (theme) => theme.palette.grey[600],
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={item.onClick}
          >
            <>{item.icon}</>

            <Typography fontSize="0.75rem" fontWeight={600}>
              {item.title}
            </Typography>
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default MobileBottomBar;
