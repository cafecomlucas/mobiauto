import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import type { SelectProps } from '@/utils/types';

export default function CustomSelect({
  title,
  id,
  items,
  value,
  handleChange,
  disabled,
}: SelectProps) {
  return (
    <FormControl variant="filled" sx={{ m: 1, maxWidth: '98%' }} fullWidth>
      {disabled}
      <InputLabel variant="filled" htmlFor={id}>
        {title}
      </InputLabel>
      <Select
        labelId={`${id}-label`}
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        <MenuItem value="">
          <em>Nenhuma</em>
        </MenuItem>
        {!items && (
          <MenuItem value="" disabled>
            <em>Carregando...</em>
          </MenuItem>
        )}
        {items?.map(({ codigo, nome }) => (
          <MenuItem key={codigo} value={codigo}>
            {nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
