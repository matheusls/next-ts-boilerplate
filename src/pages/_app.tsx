import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Boilerplate</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#06092B" />
      <meta
        name="description"
        content="A simple project starter to work with TypeScript, React, NextJS and Styled-Components"
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
