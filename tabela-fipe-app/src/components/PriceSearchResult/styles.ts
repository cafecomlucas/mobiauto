import { SxProps } from '@mui/system/styleFunctionSx';
import { teal } from '@mui/material/colors';

const styles = {
  title: { p: '1rem 0 0.5rem 0', textAlign: 'center' } as SxProps,
  containerResult: { p: '0.5rem 0', textAlign: 'center' } as SxProps,
  chipResult: {
    fontSize: '1.5rem',
    borderRadius: '1.5rem',
    height: '3rem',
    padding: '0 1rem',
    backgroundColor: teal[400],
  } as SxProps,
  caption: { p: '0.5rem', textAlign: 'center' } as SxProps,
};

export default styles;
