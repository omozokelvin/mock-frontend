import { SearchRounded } from '@mui/icons-material';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';

export function SearchTextField({ InputProps = {}, ...props }: TextFieldProps) {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRounded />
          </InputAdornment>
        ),
        ...InputProps,
      }}
      {...props}
    />
  );
}
