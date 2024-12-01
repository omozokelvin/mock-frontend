import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import { SyntheticEvent } from 'react';

type Props = {
  id: string;
  options: string[];
  value: string;
  onChange: (event: SyntheticEvent, value: string | null) => void;
  error: TextFieldProps['error'];
  helperText: TextFieldProps['helperText'];
  InputProps: TextFieldProps['InputProps'];
  disabled?: boolean;
  onInputChange?: (
    event: SyntheticEvent,
    value: string,
    reason: string
  ) => void;
};

export default function FreeSolo(props: Props) {
  return (
    <Autocomplete
      value={props.value}
      onChange={props.onChange}
      filterOptions={(options, params) => {
        const { inputValue } = params;

        if (params.inputValue !== '' && !options.includes(inputValue)) {
          options.push(`Add "${inputValue}"`);
        }

        return options;
      }}
      onInputChange={props?.onInputChange}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={props.id}
      options={props.options}
      getOptionLabel={(option) => {
        return '';
      }}
      disabled={props?.disabled}
      renderOption={(props, option) => <li {...props}>{option}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          error={props.error}
          helperText={props.helperText}
          InputProps={props.InputProps}
        />
      )}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
  );
}
