import { AppProps } from 'next/app';
import { Head } from 'next/document';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
