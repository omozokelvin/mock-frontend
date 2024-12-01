import Zoom from '@mui/material/Zoom';
import styled from '@emotion/styled';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Theme } from '@mui/material/styles';
import { usePathname, useRouter } from 'next/navigation';
import { FC, ReactNode, useCallback } from 'react';
import LightTooltip from '@/lib/components/LightToolTip';

export interface NavListItem {
  name: string;
  link: string;
  icon: ReactNode;
}

interface ItemIconProp extends ListItemIconProps {
  isActiveLink?: boolean;
  logout?: boolean;
}

const ItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'isActiveLink' && prop !== 'logout',
})<ItemIconProp>(({ theme, isActiveLink, logout = false }) => {
  return {
    minWidth: '1.5rem',
    minHeight: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    boxShadow: (theme as Theme).shadows[0],
    color: '#00000050',
    ...(isActiveLink &&
      !logout && {
        color: (theme as Theme).palette.primary.main,
      }),
    ...(logout &&
      !isActiveLink && { color: (theme as Theme).palette.error.main }),
  };
});

interface NavItemProps {
  item: NavListItem;
  open: boolean;
}

const NavItem: FC<NavItemProps> = (props) => {
  const { open, item } = props;

  const router = useRouter();
  const pathname = usePathname();

  const onListItemClick = (link: string) => {
    router.push(link);
  };

  const isActiveLink = useCallback(
    (link: string) => {
      return pathname.includes(link);
    },
    [pathname]
  );

  return (
    <ListItemButton
      onClick={() => onListItemClick(item.link)}
      sx={{
        minHeight: 40,
        justifyContent: open ? 'initial' : 'center',
        py: 1,
        ...(open && { px: 3 }),
        my: 1,
        mr: 2,
        // backgroundColor: 'unset',
        ...(isActiveLink(item.link) &&
          open && {
            ml: 0.5,
            px: 2,
            backgroundColor: (theme) => theme.palette.primary.transparent,
            color: (theme) => theme.palette.primary.main,
            borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
            // boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
            transition: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          }),

        '&:hover': {
          ...(isActiveLink(item.link) && open
            ? {
                backgroundColor: (theme) => theme.palette.background.default,
                color: (theme) => theme.palette.common.black,
              }
            : { background: 'unset' }),
        },
      }}
    >
      {open ? (
        <ItemIcon
          isActiveLink={isActiveLink(item.link)}
          sx={{ mr: open ? 1 : 'auto' }}
        >
          {item.icon}
        </ItemIcon>
      ) : (
        <LightTooltip
          title={item.name}
          placement="right"
          TransitionComponent={Zoom}
          arrow
          sx={{ color: 'black' }}
        >
          <ItemIcon
            isActiveLink={isActiveLink(item.link)}
            sx={{ mr: open ? 1 : 'auto' }}
          >
            {item.icon}
          </ItemIcon>
        </LightTooltip>
      )}

      <ListItemText
        disableTypography
        primary={item.name}
        sx={{
          fontSize: '1rem',
          opacity: open ? 1 : 0,
          ...(open && { flex: 'initial', pr: 1 }),
        }}
      />
    </ListItemButton>
  );
};

export default NavItem;
