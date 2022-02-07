import { ReactNode } from 'react'
import { Head, Header, Footer } from './index'
import styled from 'styled-components'
import { SEO } from '../utils/seo'
import { DefaultSeo } from 'next-seo'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Container>
            <Head />
            <DefaultSeo {...SEO} />
            <Header />
            {children}
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    transition: 0.5s;
`
