import { createTheme } from '@mui/material/styles';

const colorThemes = {
  palette: {
    periwinkle: {
      main: '#a3b8f7',
      light: '#bac9f5',
      dark: '#7a8cc4',
      contrastText: '#242105',
    },
    black: {
      main: "#000000",
      light: "#000000",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    white: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#7a8cc4",
    }
  }
};

const overrideThemes = {
  root: {
    "& .MuiPaper-root .MuiSnackbarContent-root": {
      backgroundColor: 'red',
    }
  },
  overrides: {
    MuiSnackbarContent: {
        root: {
          minWidth: "50px"
        }
    },
    MuiPaper: {
      root: {
        minWidth: "50px"
      }
    }
}
};

const fontThemes  = {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}

export const theme = createTheme({
  ...colorThemes,
  ...fontThemes,
  ...overrideThemes
});