import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderComp from "components/HeaderComp";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black h-screen pt-10">
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <HeaderComp />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
