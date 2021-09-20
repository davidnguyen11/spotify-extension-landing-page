import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Footer } from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
