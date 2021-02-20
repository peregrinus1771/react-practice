import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Head, Header, Footer } from '../src/components/index'
import styled from 'styled-components'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../src/logics/seo'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head />
            <DefaultSeo {...SEO} />
            <Container>
                <Header />
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </Container>
        </>
    )
}

const Container = styled.body`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`
