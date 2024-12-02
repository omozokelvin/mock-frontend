import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Popover,
  Typography,
} from '@mui/material';
import React from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { SearchTextField } from '@/lib/components/SearchTextField';

type Props = {
  id?: string;
};

export default function RecommendationsFilterPopover(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? props?.id || 'filter-popover' : undefined;

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        color="inherit"
        startIcon={<FilterAltOutlinedIcon />}
        sx={{ borderColor: '#e5e7eb' }}
      >
        Filter
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        elevation={2}
        sx={{ marginTop: 1 }}
      >
        <Box
          sx={{
            borderRadius: 16,
            minWidth: 400,
            rowGap: 2,
            display: 'flex',
            flexDirection: 'column',
            paddingBlock: 2,
          }}
        >
          <SearchTextField
            placeholder="Cloud Provider"
            fullWidth
            sx={{
              border: 'unset',
              outline: 0,
            }}
          />

          <List>
            <ListItem sx={{ justifyContent: 'space-between' }}>
              <FormControlLabel control={<Checkbox />} label="Resource Type" />

              <Typography variant="body2" color={'GrayText'}>
                5
              </Typography>
            </ListItem>
          </List>

          <Button color="inherit">Clear Filters</Button>
        </Box>
      </Popover>
    </>
  );
}
