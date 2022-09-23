import { createTheme } from "@mui/material";
import { cyan, lightBlue } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: lightBlue[700],
      dark: lightBlue[800],
      light: lightBlue[500],
      contrastText: "#fff",
      textAltered: "#121212",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#f7f6f3",
    },
  }
});