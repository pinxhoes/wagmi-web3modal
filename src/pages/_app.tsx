import { ContextProvider } from '@/context/index';
import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
}

export default MyApp;
