import styled from 'styled-components'
import dayjs from 'dayjs'

export const Footer = (): JSX.Element => {
    const publishedYear = '2021'
    const thisYear = dayjs().format('YYYY')
    const year =
        publishedYear === thisYear
            ? publishedYear
            : `${publishedYear} - ${thisYear}`
    return (
        <Container>
            <Copyright>@{year}falco</Copyright>
        </Container>
    )
}

const Container = styled.footer`
    margin-top: auto;
    display: flex;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    border-top: 1px solid gray;
    background-color: ${(props) => props.theme.bg.secondary};
`
const Copyright = styled.p``
