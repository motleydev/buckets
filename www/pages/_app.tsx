import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createClient, Provider } from "urql";

function MyApp({ Component, pageProps }: AppProps) {
  const client = createClient({
    url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
  });

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
