import { useState, useContext, useMemo, createContext, useEffect, } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { DarkTheme, LightTheme } from '../themes';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      if (mode === "light") {
        localStorage.setItem("theme", "dark")
      } else {
        localStorage.setItem("theme", "light")
      }
    },
  }), [mode])

  useEffect(() => {
    const existingPreference = localStorage.getItem("theme")
    if (existingPreference) {
      (existingPreference === "light")
        ? setMode("light")
        : setMode("dark")
    } else {
      setMode("light")
      localStorage.setItem("theme", "light")
    }
  }, []);

  const theme = useMemo(() => {
    if (mode === "light") {
      return LightTheme;
    }
    return DarkTheme;
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => useContext(ColorModeContext);
