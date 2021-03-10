import { createContext } from 'react'
import { useDarkMode } from '../src/styles/darkmode'
import type { AppProps } from 'next/app'
import { Head, Header, Footer } from '../src/components'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, LightTheme, DarkTheme } from '../src/styles/styles'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../src/logics/seo'

export const ToggleContext = createContext(null)

export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme, mountedComponent] = useDarkMode()
    const themeMode = theme === 'light' ? LightTheme : DarkTheme

    if (!mountedComponent) return <div />
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Head />
            <DefaultSeo {...SEO} />
            <Container>
                <ToggleContext.Provider value={{ theme, setTheme }}>
                    <Header />
                </ToggleContext.Provider>
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </Container>
        </ThemeProvider>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    transition:0.5s;
`
