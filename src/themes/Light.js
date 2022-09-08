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
      main: '#015F43',
      dark: '#00875F',
      light: '#00B37E',
      contrastText: "#fff",
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
      paper: "##E1E1E6",
      default: "#f9f9f9",
      darkPaper: "#323238",
      dark: "#09090A",
    },
  }
});