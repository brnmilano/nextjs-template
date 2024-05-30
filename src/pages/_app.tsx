import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import "@/styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
