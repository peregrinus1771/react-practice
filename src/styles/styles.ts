import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    body {

        margin: 0;
        padding:0;
        font-family: Arial,
        Helvetica, sans-serif;
        color: ${(props) => props.theme.text.primary};
        background-color: ${(props) => props.theme.bg.primary};

    }
`

export const LightTheme = {
    bg: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
    },
    text: {
        primary: '#292929',
        secondary: '#757594',
    },
}

export const DarkTheme = {
    bg: {
        primary: '#383B40',
        secondary: '#27292D',
    },
    text: {
        primary: '#f0f6fc',
        secondary: '#c9d1d9',
    },
}
