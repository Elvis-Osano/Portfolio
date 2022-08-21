import type { AppProps } from "next/app";

import "../Styles/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
