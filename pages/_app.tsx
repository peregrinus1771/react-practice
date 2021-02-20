import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Head, Header, Footer } from '../src/components/index'
import styled from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head />
            <Container>
                <Header />
                <Component {...pageProps} />
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
