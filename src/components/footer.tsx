import styled from 'styled-components'
import dayjs from 'dayjs'

export const Footer:React.VFC = () => {
    const publishedYear = '2021'
    const thisYear = dayjs().format('YYYY')
    const year =
        publishedYear === thisYear
            ? publishedYear
            : `${publishedYear} - ${thisYear}`
    return (
        <Container>
            <Copyright>@{year} Flik</Copyright>
        </Container>
    )
}

const Container = styled.footer`
    padding-top: 20px;
    border-top: solid 1px ${(props) => props.theme.text.secondary};
    margin-top: auto;
    display: flex;
    align-self: stretch;
    justify-content: center;
    align-items: center;
`
const Copyright = styled.p`
    color: ${(props) => props.theme.text.secondary};
`
