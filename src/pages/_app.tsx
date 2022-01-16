import type { AppProps } from 'next/app'
import { useDarkMode } from '../utils/useDarkMode'
import { ToggleProvider } from '../utils/store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, LightTheme, DarkTheme } from '../styles/styles'
import {Layout} from '../components/index'



export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useDarkMode()
    const themeMode = theme === 'light' ? LightTheme : DarkTheme
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <ToggleProvider theme={theme} setTheme={setTheme}>
                <Layout>
                <Component {...pageProps} />
                </Layout>
            </ToggleProvider>
        </ThemeProvider>
    )
}
