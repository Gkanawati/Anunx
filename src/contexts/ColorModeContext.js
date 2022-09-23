import { useState, useContext, useMemo, createContext, } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DarkTheme, LightTheme } from '../themes';


export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

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
