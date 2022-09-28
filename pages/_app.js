import PropTypes from 'prop-types';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import '../src/TradutorYup';
import '../src/styles/globals.css';
import CheckAuth from '../src/components/CheckAuth';
import { ToastProvider } from '../src/contexts/Toast';
import { ColorModeProvider } from '../src/contexts/ColorModeContext'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Anunx | Anúncios Online</title>
      </Head>
      <ColorModeProvider>
        <SessionProvider session={pageProps.session}>
          <ToastProvider>
            <CssBaseline />
            {
              Component.requireAuth
                ? <CheckAuth Component={Component} pageProps={pageProps} />
                : <Component {...pageProps} />
            }

          </ToastProvider>
        </SessionProvider>
      </ColorModeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};