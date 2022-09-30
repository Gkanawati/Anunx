import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import NProgress from 'nprogress'
import '../src/utils/TradutorYup';
import '../src/styles/globals.css';
import CheckAuth from '../src/components/CheckAuth';
import { ToastProvider } from '../src/contexts/Toast';
import { ColorModeProvider } from '../src/contexts/ColorModeContext'

import '../public/nprogress.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter()


  // Add progress bar based on route change
  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Anunx | Anúncios Online</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <ColorModeProvider>
          <ToastProvider>
            <CssBaseline />
            {
              Component.requireAuth
                ? <CheckAuth Component={Component} pageProps={pageProps} />
                : <Component {...pageProps} />
            }
          </ToastProvider>
        </ColorModeProvider>
      </SessionProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};