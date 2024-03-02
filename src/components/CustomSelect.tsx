import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


interface CustomSelectProps {
  label: string;
  data: Array<{id: string | number, value: string, label: string}>;
  defaultValue?: string;
  id: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange?: any;
}

function CustomSelect({label, data, defaultValue, id, value, onChange}: CustomSelectProps) {
  return (
    <FormControl fullWidth sx={{ flex: 1, width: '100%'}}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        displayEmpty
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
        inputProps={{
          name: id,
          id: id,
        }}
      >
        {data.map((option) => (
          <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
        </FormControl>
  );
}

export default CustomSelect;