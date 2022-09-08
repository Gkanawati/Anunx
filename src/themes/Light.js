import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#121214',
      dark: '#121214',
      light: '#323238',
      contrastText: "#F9F9F9",
      altText: "#E1E1E6",
      gray: "#C4C4CC",
      white: '#fff',
    },
    secondary: {
      main: "#fff",
      greenDark: '#015F43',
      greenMd: '#00875F',
      greenLight: '#00B37E',
    },
    blue: {
      main: '#81D8F7',
    },
    warning: {
      main: '#FBA94C',
    },
    error: {
      main: '#F75A68',
    },
    background: {
      default: "#f9f9f9",
      paper: "#f2f4f5",
      darkPaper: "#323238",
      dark: "#09090A",
    },
  }
});