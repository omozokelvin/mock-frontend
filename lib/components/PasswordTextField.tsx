'use client';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { useState } from 'react';

export function PasswordTextField({
  InputProps = {},
  ...props
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {showPassword ? (
              <IconButton
                aria-label="hide password"
                disableRipple
                onClick={() => setShowPassword(false)}
                sx={{ padding: 0, '&:hover': { bgcolor: 'transparent' } }}
              >
                <VisibilityOffOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="show password"
                disableRipple
                onClick={() => setShowPassword(true)}
                sx={{ padding: 0, '&:hover': { bgcolor: 'transparent' } }}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
        ...InputProps,
      }}
      {...props}
    />
  );
}
