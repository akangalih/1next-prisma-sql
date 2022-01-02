import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderComp from "components/HeaderComp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black h-screen pt-10">
      <HeaderComp />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
