'use client';
import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

const commonStyles = {
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
};

export const theme = createTheme({
  ...commonStyles,
  palette: {
    background: {
      default: deepPurple[50],
    },
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: deepPurple[900],
    },
  },
});
