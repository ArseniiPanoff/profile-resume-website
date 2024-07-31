import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // Blue
    },
    secondary: {
      main: '#FFA500', // Orange
    },
    background: {
      default: '#F5F5F5', // Light Gray
    },
    text: {
      primary: '#333333', // Dark Gray for text
    },
  },
});

export default theme;
