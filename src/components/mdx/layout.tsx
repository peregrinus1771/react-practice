import styled, { createGlobalStyle } from 'styled-components'

export const Layout = (children) => {
    return (
        <>
            <GlobalStyle>{children}</GlobalStyle>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding:0;
        font-family: Arial,Helvetica, sans-serif;
    }
    code{
        color: "white";
        background-color: "cobalt";
    }
    `
