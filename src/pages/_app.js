import '@/styles/globals.css'
// import { GoogleAnalytics } from '@next/third-parties/google'
import GoogleAnalytics from '@/sections/GoogleAnalytics/GoogleAnalytics';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
