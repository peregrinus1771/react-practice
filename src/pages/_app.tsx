import type { AppProps } from 'next/app'
import '../styles/global.css'
import { Layout } from '../components/index'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
