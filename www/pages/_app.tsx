import "../styles/globals.css";
import type { AppProps } from "next/app";
import withUrqlClient from "../lib/urql";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withUrqlClient(MyApp);
