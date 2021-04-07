import type { AppProps , AppContext } from 'next/app';

const MyApp = ({ Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appCtx: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const { Component, ctx } = appCtx;
  const pageProps = (Component.getInitialProps && (await Component.getInitialProps(ctx))) || {};
  return { pageProps };
}

export default MyApp