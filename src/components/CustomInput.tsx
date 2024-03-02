
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ReactComponentElement } from 'react';


interface CustomInputProps {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  id: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: unknown | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  endIconComponent?: ReactComponentElement<any, any>;
}

function CustomInput({label, defaultValue, placeholder, value = '', onChange, endIconComponent, id}: CustomInputProps) {
  return (
    <FormControl fullWidth>
      {!value.length &&<InputLabel id={`${id}-label`}>{placeholder}</InputLabel>}
      <TextField fullWidth id={id} label={label} variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
        InputProps={{
          endAdornment: (
            <InputAdornment sx={{ color: 'primary.main', alignItems: 'center' }} position="end">
              {endIconComponent}
            </InputAdornment>
          ),
        }}
      InputLabelProps={{
        shrink: true,
      }} />
    </FormControl>
  );
}

export default CustomInput;