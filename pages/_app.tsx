import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ScrollToTop from '@/components/ScrollToTop';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen bg-dark-400">
      <Component {...pageProps} />
      <ScrollToTop />
    </main>
  );
}