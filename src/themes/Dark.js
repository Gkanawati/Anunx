import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
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
    background: {
      paper: "#303134",
      default: "#202124",
    },
  }
});