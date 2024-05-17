import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Menu from '../componentes/Menu'; // Mantenha o Menu aqui

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Menu /> {/* Mantenha o Menu aqui */}
            <Component {...pageProps} />
            <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        </>
    );
}

export default MyApp;
