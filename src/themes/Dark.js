import { createTheme } from "@mui/material";
import { cyan, lightBlue } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: lightBlue[700],
      dark: lightBlue[800],
      light: lightBlue[500],
      contrastText: "#fff",
      textAltered: "#fff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#fff",
    },
    background: {
      paper: "#303134",
      default: "#202124",
    },
  },
  typography: {
    allVariants: {
      color: "#fff"
    }
  }
});