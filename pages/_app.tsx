import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { UserProvider } from '@auth0/nextjs-auth0';
import { getCookie, setCookie } from 'cookies-next';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
  return (
    <>
      <Head>
        <title>Plataforma Siemens - GTIME</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <UserProvider>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: colorScheme,
              fontFamily: 'Montserrat,Helvetica,Arial,Lucida,sans-serif',
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </ColorSchemeProvider>
      </UserProvider>

    </>
  );
}