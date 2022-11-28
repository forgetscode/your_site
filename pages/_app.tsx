import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ColorModeContextProvider } from '../context/ColorModeContext'
import { ActiveScrollContextProvider } from '../context/ActiveScroll';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ColorModeContextProvider>
      <ActiveScrollContextProvider>
        <Component {...pageProps} />
      </ActiveScrollContextProvider>
    </ColorModeContextProvider>
  );
}

export default MyApp
