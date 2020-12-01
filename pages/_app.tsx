import Head from 'next/head'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyles from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>what_to_do</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
