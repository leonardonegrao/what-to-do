import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyles from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
