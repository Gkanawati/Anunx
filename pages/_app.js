import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from "next-auth/client"
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { theme } from '../src/themes/';
import createEmotionCache from '../src/createEmotionCache';
import '../src/TradutorYup';
import '../src/styles/globals.css';
import CheckAuth from '../src/components/CheckAuth';
import { ToastProvider } from '../src/contexts/Toast';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Anunx</title>
      </Head>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <CssBaseline />
            {
              Component.requireAuth
                ? <CheckAuth Component={Component} pageProps={pageProps} />
                : <Component {...pageProps} />
            }

          </ToastProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};