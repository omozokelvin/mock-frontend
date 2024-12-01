import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { ClickAwayListener, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

import LightTooltip from '@/lib/components/LightToolTip';
import { routes } from '@/lib/constants/routes';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useAuth } from '@/lib/providers/AuthContext';
import { RootState, useSelector } from '@/lib/redux/store';

export const NameTag = () => {
  const { logout } = useAuth();

  const { profile, isAdmin } = useSelector(
    (state: RootState) => state.userSlice
  );

  const router = useRouter();

  const [openAccountMenu, setOpenAccountMenu] = useState(false);

  const handleTooltipOpen = () => {
    setOpenAccountMenu(true);
  };

  const handleTooltipClose = () => {
    setOpenAccountMenu(false);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <LightTooltip
          open={openAccountMenu}
          onClose={handleTooltipClose}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement="bottom-end"
          arrow
          title={
            <List>
              <ListItem
                secondaryAction={
                  <ArrowForwardIosOutlinedIcon
                    sx={{
                      color: (theme) => theme.palette.text.secondary,
                      fontSize: '0.875rem',
                    }}
                  />
                }
                sx={{
                  cursor: 'pointer',
                }}
              >
                <ListItemText
                  primary="My Account"
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    color: (theme) => theme.palette.text.secondary,
                    pr: 10,
                  }}
                  onClick={() => router.push(routes.profile())}
                />
              </ListItem>

              {isAdmin && (
                <ListItem
                  secondaryAction={
                    <ArrowForwardIosOutlinedIcon
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: '0.875rem',
                      }}
                    />
                  }
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  <ListItemText
                    primary="Console"
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      color: (theme) => theme.palette.text.secondary,
                      pr: 10,
                    }}
                    onClick={() => router.push(routes.console)}
                  />
                </ListItem>
              )}

              <ListItem
                secondaryAction={
                  <LogoutOutlinedIcon
                    sx={{
                      color: (theme) => theme.palette.error.main,
                      fontSize: '0.875rem',
                    }}
                  />
                }
                sx={{
                  cursor: 'pointer',
                }}
                onClick={logout}
              >
                <ListItemText
                  primary="Logout"
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    color: (theme) => theme.palette.error.main,
                    pr: 10,
                  }}
                />
              </ListItem>
            </List>
          }
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            rowGap={0.2}
            onClick={handleTooltipOpen}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Typography variant="body2">
              {profile?.firstName} {profile?.lastName[0]}.
            </Typography>
          </Box>
        </LightTooltip>
      </div>
    </ClickAwayListener>
  );
};
