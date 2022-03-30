import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "urql";
import { useUrql } from "../lib/urql";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useUrql();

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
